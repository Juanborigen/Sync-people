'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TalentTypeAcf, IndustryType } from '@/types';
import { INDUSTRIES_BANNER } from '@/app/constants';
import generatePDF from 'react-to-pdf';

type TalentProfileProps = {
    talentData: TalentTypeAcf;
};

const TalentProfile = ({
    talentData,
}:TalentProfileProps) => {
    const pdfRef = useRef(null);
    const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>(talentData.professional_information.industries[0]);

    const downloadPDF = () => {
        generatePDF(pdfRef, {
          method: "save",
          filename: `invoice-${talentData.personal_information.first_name}-${selectedIndustry.industry}`,
          page: { margin: 5 },
        });
    };

    return (
        <div className='flex flex-col md:w-full'>
            <div className='md:w-full w-[80vw] mx-auto md:mx-0 md:flex justify-center gap-12 my-8'>
                <div
                    ref={pdfRef}
                    className='border rounded-2xl bg-white'
                >
                    <div className='relative flex flex-col mx-auto md:w-[900px] bg-white'>
                        <div className='relative h-[10rem] md:w-[900px] w-[80vw]'>
                            <Image
                                src={INDUSTRIES_BANNER[selectedIndustry.industry]}
                                alt={`Banner for ${talentData.personal_information.first_name}`}
                                fill
                                className='object-cover rounded-t-2xl object-center'
                            />
                        </div>
                        <div className='relative flex flex-col justify-between md:px-12 px-6 py-6'>
                            <div className='flex md:gap-4 flex-col md:flex-row mb-2'>
                                <Image
                                    src={talentData.personal_information.profile_pic ? talentData.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                                    alt={`Profile picture for ${talentData.personal_information.first_name}`}
                                    width={140}
                                    height={140}
                                    className='rounded-full border-[6px] border-white relative -top-14 w-36 h-36'
                                />
                                <p className='relative -top-10 md:top-0'>
                                    {talentData.extras.more_about_myself}
                                </p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between items-center mb-6 flex-col-reverse md:flex-row gap-4'>
                                    <h2 className='text-2xl'>
                                        {talentData.personal_information.first_name} <span className='h-bold capitalize'> - {selectedIndustry.rol}</span>
                                    </h2>

                                    <select
                                        className='bg-[#f3f4f6] rounded-lg p-2 w-full md:w-[200px] text-[#1A335D] text-center ml-auto flex'
                                        onChange={(e) => {
                                            const selected = talentData.professional_information.industries.find((industry) => industry.rol === e.target.value);
                                            if (selected) {
                                                setSelectedIndustry(selected);
                                            }
                                        }}
                                    >
                                        {talentData.professional_information.industries.map((industry, index) => (
                                            <option
                                                key={index}
                                                value={industry.rol}
                                                onClick={() => setSelectedIndustry(industry)}
                                            >
                                            {industry.industry.toUpperCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex justify-between flex-col md:flex-row gap-3'>
                                    <div>
                                        <p className='text-[#1A335D]'>
                                            {talentData.working_rights.current_visa.label}
                                        </p>
                                        <p className='text-[#1A335D]'>
                                            {talentData.personal_information.country}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg'>
                                            Preferred Salary
                                        </h2>
                                        <div className={`flex gap-2`}>
                                            ${selectedIndustry.preferred_salary} aud per Hour
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between pt-4 flex-col md:flex-row gap-3'>
                                    {
                                        selectedIndustry.certificates && (
                                        <div>
                                            <h2 className='text-lg'>Licenses</h2>
                                            <p>
                                                {selectedIndustry.certificates.map(certificate => certificate.name).join(', ')}
                                            </p>
                                        </div>
                                        )
                                    }

                                    <div>
                                        <h2 className='text-lg'>
                                            Availability
                                        </h2>
                                        <div className={`flex gap-2 capitalize`}>
                                            {talentData.professional_information.work_preference}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col my-4 mx-auto md:w-[900px] bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-xl pb-4 font-bold'>
                            Work Experience
                        </h2>
                        {
                            talentData.work_experience.experience.map((experience, index) => (
                                <div key={index} className='flex flex-col'>
                                    <h2 className='text-xl mb-2'>
                                        {experience.rol}
                                    </h2>
                                    <p className='opacity-70'>{experience.company_name}</p>
                                    <p className='opacity-70'>{experience.start_date} - {experience.currently_working ? 'Current' : experience.end_date}</p>
                                    <p>{experience.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col  my-4 mx-auto md:w-[900px] bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-xl pb-4 font-bold'>
                            Extras
                        </h2>
                        <h2 className='text-lg'>
                            Level of English
                        </h2>
                        <p className='capitalize'>
                            {talentData.extras.level_of_english}
                        </p>
                        <h2 className='text-lg mt-2'>
                            Languages
                        </h2>
                        {
                            <p>{talentData.extras.languages.join(', ')}</p>
                        }
                        <h2 className='text-lg mt-2'>
                            Education Level
                        </h2>
                        <p className='capitalize'>
                            {talentData.extras.education_level}
                        </p>
                        <h2 className='text-lg mt-2 hidden'>
                            Presentation video
                        </h2>

                        <Link href={talentData.extras.presentation_video} target='_blank' className='underline hidden'>
                            {talentData.extras.presentation_video}
                        </Link>
                        <h2 className='text-lg mt-2'>
                            Other Credentials
                        </h2>
                        {
                            talentData.extras.other_credentials && talentData.extras.other_credentials.map((credential, index) => (
                                <div key={index}>
                                    <p className='capitalize'>
                                        {credential.certificate}
                                    </p>
                                    <p>
                                        {credential.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex pb-8 justify-end flex-wrap gap-4 md:gap-6 md:mb-0 w-[80vw] md:w-[900px] mx-auto'>
                <button
                    className='primary-btn w-full md:w-auto px-8'
                    onClick={downloadPDF}
                >
                    {`Connect with ${talentData.personal_information.first_name}`}
                </button>
                <button
                    className='secondary-btn w-full md:w-auto px-8'
                    onClick={downloadPDF}
                >
                    Download Profile
                </button>
            </div>
        </div>
    );
};

export default TalentProfile;
