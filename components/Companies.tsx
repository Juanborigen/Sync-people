import React from 'react'

const Companies = () => {
  return (
    <div className='hidden flex-col items-center bg-[#1A335D] md:h-[350px] py-20 md:py-0 px-6 md:px-0'>
      <h1 className='text-white text-3xl md:text-[38px] md:pt-16 font-semibold'>Some of the companies we work with</h1>
      <div className='flex pt-16 gap-10 md:gap-28 flex-wrap justify-center'>
        <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.9165 29.1455H34.1665L29.0409 17.1873L23.9165 29.1455Z" fill="#F1F1F1"/>
          <path d="M29.0415 0.104004L0 10.476L5.97944 45.7407L29.0415 58.187L52.0868 45.7407L58.083 10.476L29.0415 0.104004ZM40.4507 41.5919L37.0033 34.3315H21.0784L17.6324 41.5919H12.4464L29.0415 5.28999L45.6367 41.5919H40.4507Z" fill="#F1F1F1"/>
        </svg>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55.6238 8.87779L42.6128 21.8966L55.5308 34.8464L47.1533 43.2289L12.9157 8.96972L21.292 0.58607L34.2353 13.5141L47.2428 0.520752L55.6238 8.87779Z" fill="#F1F1F1"/>
          <path d="M1.02399 20.8572L9.40667 12.479L43.6656 46.7171L35.2829 55.094L22.3399 42.1756L9.31353 55.1871L0.957458 46.8065L13.9512 33.7986L1.02399 20.8572Z" fill="#F1F1F1"/>
        </svg>
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.7683 33.1445C53.164 31.364 53.3614 29.5452 53.3568 27.7212C53.3568 13.7493 41.8629 2.41266 27.6771 2.41266C26.2075 2.41159 24.7402 2.53212 23.2905 2.77301C20.9197 1.29297 18.1792 0.512299 15.3844 0.520821C7.17082 0.520821 0.498341 7.0936 0.498341 15.1931C0.489601 17.8092 1.19567 20.3781 2.54032 22.6223C2.19644 24.2961 2.02259 26.0004 2.02142 27.7092C2.02142 41.6956 13.5154 53.0178 27.6867 53.0178C29.2614 53.0218 30.8331 52.881 32.3821 52.5974C34.5532 53.7407 36.9707 54.3365 39.4245 54.3331C47.6525 54.3331 54.3106 47.7603 54.3106 39.6608C54.3243 37.3967 53.7955 35.1622 52.7683 33.1445ZM40.8575 39.7989C39.666 41.4518 37.9135 42.7694 35.6432 43.6943C33.373 44.6192 30.6908 45.0841 27.6075 45.0841C23.9211 45.0841 20.8377 44.4391 18.4125 43.1778C16.7314 42.2931 15.2815 41.0258 14.1796 39.4782C13.0854 37.9371 12.5388 36.396 12.5388 34.9138C12.5388 33.9889 12.8992 33.1901 13.6043 32.5175C14.3057 31.8725 15.2162 31.5361 16.2817 31.5361C17.1645 31.5361 17.9213 31.7884 18.5387 32.3073C19.1272 32.7974 19.6317 33.5265 20.0377 34.479C20.4312 35.3913 20.9282 36.2553 21.5187 37.0543C22.0248 37.7125 22.7399 38.2591 23.664 38.6939C24.6033 39.1287 25.8501 39.3521 27.3876 39.3521C29.5041 39.3521 31.2422 38.9041 32.5454 38.0212C33.8355 37.166 34.4529 36.1294 34.4529 34.8682C34.4529 33.8736 34.1298 33.088 33.4571 32.4718C32.7569 31.8268 31.8452 31.3223 30.7101 30.986C29.5461 30.6256 27.963 30.2437 26.0003 29.8377C23.3373 29.2767 21.0755 28.6041 19.2738 27.8473C17.4384 27.0762 15.9525 25.9976 14.8583 24.6667C13.7508 23.3069 13.2043 21.5977 13.2043 19.5929C13.1855 17.7401 13.7985 15.9361 14.9424 14.4784C16.0919 13.0069 17.7603 11.8574 19.9332 11.0731C22.0641 10.2887 24.6009 9.89592 27.4597 9.89592C29.7587 9.89592 31.7635 10.1626 33.4451 10.6671C35.1268 11.1716 36.5573 11.8863 37.6924 12.7547C38.8275 13.6231 39.6551 14.548 40.1873 15.5174C40.7194 16.4867 40.9872 17.4657 40.9872 18.4002C40.9872 19.2962 40.6365 20.1238 39.935 20.8385C39.5948 21.1926 39.1851 21.4724 38.7316 21.6605C38.2781 21.8486 37.7906 21.9409 37.2997 21.9316C36.3471 21.9316 35.6036 21.707 35.0859 21.259C34.6054 20.8385 34.1046 20.1935 33.558 19.2542C32.913 18.0639 32.1419 17.1101 31.259 16.4375C30.3894 15.7936 28.96 15.4573 26.9696 15.4573C25.1331 15.4573 23.634 15.8177 22.5253 16.5384C21.4599 17.2254 20.941 18.0242 20.941 18.9623C20.9278 19.4998 21.1124 20.0235 21.4599 20.4338C21.8826 20.9201 22.4033 21.3119 22.9878 21.5833C23.646 21.9141 24.3362 22.1769 25.0478 22.3676C25.7685 22.5646 26.954 22.8589 28.5948 23.2229C30.6824 23.6577 32.5887 24.1622 34.2715 24.6799C35.982 25.2264 37.4534 25.881 38.6582 26.6558C39.8547 27.4112 40.8505 28.4453 41.5602 29.6695C42.2473 30.8707 42.598 32.3878 42.598 34.1258C42.6743 36.1591 42.0609 38.1584 40.8575 39.7989Z" fill="#F1F1F1"/>
        </svg>
        <svg width="103" height="70" viewBox="0 0 103 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M102.958 49.3304C102.662 46.9598 101.447 44.9035 99.3364 43.2111C99.3102 43.1795 99.2812 43.1502 99.2499 43.1236L99.1433 43.048L99.1091 43.0241L97.9886 42.2286L97.9503 42.2008L97.8075 42.1014C97.7551 42.0711 97.699 42.0477 97.6405 42.0317C94.0959 39.9456 88.2277 38.4838 79.2494 41.6161C77.1069 38.0523 76.8635 35.1965 78.2979 30.8213C78.5534 30.0596 78.316 29.5564 77.5515 29.2303C76.0146 28.5839 73.9103 28.9141 72.4176 29.3039C71.7216 29.4828 71.3031 29.8726 71.1704 30.4633C70.2249 34.8385 67.4768 38.8359 64.8194 42.694L64.6625 42.9207C63.0249 39.4882 63.3649 36.8292 64.5055 33.4981C64.7329 32.8339 64.5538 32.3924 63.9242 32.0622C62.1659 31.1653 59.5285 31.7818 58.4784 32.0881C57.1467 32.4719 55.7184 36.0298 54.1231 40.2896C53.7207 41.3615 53.3747 42.2784 53.1675 42.7059C52.6746 43.7003 52.2039 44.8339 51.705 46.0371C50.5784 48.7596 49.309 51.8243 47.4944 53.7494C46.8346 52.3075 47.8727 50.0344 48.8805 47.8289C50.0735 45.2217 51.2 42.7576 49.9025 41.1845C49.6973 40.9358 49.4427 40.7313 49.1545 40.5835C48.8663 40.4358 48.5506 40.3479 48.2267 40.3254C47.8042 40.2936 47.3801 40.3618 46.9895 40.5243C47.1243 39.4007 47.1303 38.5137 46.7984 37.4418C46.3236 35.9124 45.0904 35.0553 43.3926 35.101C39.526 35.2124 36.255 38.0602 34.1889 40.4308C32.8129 42.0218 29.7632 43.2349 27.0856 44.2989C26.0274 44.7424 25.0215 45.1401 24.1827 45.5379C22.8449 44.4202 21.145 43.2926 19.3545 42.1014C14.3252 38.7643 8.62605 34.9797 8.4289 29.8488C8.14726 22.2697 16.8781 16.8942 24.4985 13.0579C30.2741 10.1543 35.2954 8.22925 39.8499 7.17721C46.2472 5.69958 51.6507 5.99789 55.9075 8.06021C58.237 9.18782 59.3274 11.6399 58.6353 14.1616C56.8248 20.7145 49.3231 25.2051 42.9077 27.2256C39.0432 28.4427 35.7541 28.9518 32.8491 28.7848C29.2079 28.576 26.2346 26.7702 24.9632 26.0006C24.7595 25.863 24.5441 25.7433 24.3195 25.6426L24.2611 25.6287C24.146 25.6004 24.0252 25.6039 23.912 25.639C23.7988 25.6741 23.6975 25.7393 23.6194 25.8276C23.3579 26.1358 23.4504 26.623 23.5449 26.8696C24.7822 30.0655 27.337 32.0841 31.1372 32.8697C32.3809 33.1159 33.6468 33.2351 34.9152 33.2256C43.809 33.2256 55.1571 28.1564 59.3254 23.982C62.1679 21.1381 64.238 18.2147 65.095 13.1732C65.9902 7.89315 62.3691 4.22394 58.6796 2.53352C49.7134 -1.55731 39.5301 0.0595334 32.5655 2.13577C24.418 4.56401 15.9889 8.979 9.44281 14.2531C1.3718 20.7503 -1.5452 26.7821 0.76828 32.2014C3.14412 37.756 8.93787 41.2303 14.5405 44.5912C16.351 45.6751 18.0731 46.7073 19.6241 47.7732C19.1574 47.9979 18.6806 48.2267 18.1958 48.4554C13.4924 50.7086 8.15732 53.2442 5.19808 57.4345C3.04957 60.4872 2.64722 63.526 4.00312 66.4673C4.72734 68.0324 6.01484 69.0944 7.80326 69.6234C8.73358 69.884 9.69705 70.0106 10.6639 69.9993C14.1462 69.9993 17.9785 68.6072 20.0647 67.3205C23.7501 65.0334 26.1381 61.9628 27.164 58.1942C28.0773 54.8412 27.8581 51.51 26.5303 48.5369L31.0466 46.2857C28.868 53.4451 30.5377 57.7209 32.3724 60.0795C33.0483 60.9486 34.2674 61.4716 35.6293 61.4955C36.9913 61.5193 38.2446 61.0122 38.9527 60.1491C40.2925 58.5084 41.2823 56.5893 42.1936 54.6701C42.1453 55.923 42.2056 57.1919 42.6382 58.2678C43.0264 59.2363 43.6661 59.8786 44.491 60.1252C45.3681 60.3897 46.396 60.167 47.3858 59.4988C51.8458 56.4819 54.8956 49.2409 57.3458 43.4199C57.6939 42.5926 58.0278 41.7971 58.3517 41.0533C58.9579 43.198 59.8012 45.2701 60.8663 47.2323C61.1037 47.6579 61.0836 47.8448 60.7617 48.1948C60.2769 48.7199 59.601 49.3543 58.8848 50.0265C56.7162 52.0609 54.0164 54.6005 53.6543 56.8339C53.5135 57.7288 54.1371 58.5442 55.1048 58.7291C58.0157 59.3019 61.5222 58.4646 64.4874 56.4918C67.1831 54.702 68.197 52.2061 67.505 49.0957C66.8351 46.1007 68.364 42.3818 72.0495 38.0344C72.653 40.5263 73.4577 42.5409 74.5682 44.3049L74.538 44.3287C71.8543 46.6456 68.1769 49.8176 68.7483 53.6658C68.7962 54.0318 68.9208 54.3839 69.114 54.6996C69.3073 55.0153 69.565 55.2877 69.8708 55.4994C70.1975 55.7175 70.5663 55.8665 70.9541 55.937C71.3418 56.0075 71.7401 55.998 72.1239 55.9091C75.6384 55.1793 78.2838 53.7096 80.207 51.4206C82.1302 49.1315 81.4281 46.5939 80.7803 44.6251C85.8096 43.2767 90.2877 43.3105 94.4801 44.7245C96.8338 45.52 98.5217 46.8266 99.4953 48.6304C100.72 50.8995 100.059 52.9936 97.6265 54.527C96.8801 54.9983 96.52 55.2867 96.4979 55.6506C96.493 55.7351 96.5087 55.8194 96.5437 55.8966C96.5787 55.9738 96.632 56.0415 96.6991 56.0941C96.9807 56.3228 97.8498 56.7205 99.8152 55.4975C101.626 54.3738 102.688 52.8445 102.96 50.9234C103.014 50.3937 103.013 49.8599 102.958 49.3304ZM22.5431 54.3142L22.523 54.5687C22.2092 57.4802 20.7125 60.0178 18.067 62.1259C16.4054 63.4504 14.6009 64.2638 12.9875 64.4189C11.8609 64.5263 11.0421 64.3752 10.5553 63.9675C10.1912 63.6632 9.99603 63.2078 9.95177 62.5754C9.62185 57.5081 17.6607 52.4726 22.185 50.816C22.5079 51.9528 22.6291 53.1364 22.5431 54.3142ZM43.133 40.0231C42.3887 44.2174 40.2181 52.1345 36.8062 55.2071C36.6432 55.3543 36.5064 55.406 36.4441 55.3921C36.3817 55.3781 36.3334 55.3046 36.2831 55.1932C35.1445 52.584 35.565 48.1769 37.289 44.7145C38.6147 42.0457 40.5078 40.2777 42.6241 39.7427C42.7119 39.7188 42.8025 39.7061 42.8937 39.7049C42.9649 39.7 43.0358 39.7189 43.0948 39.7586C43.1197 39.7976 43.136 39.8412 43.1426 39.8868C43.1492 39.9324 43.1459 39.9789 43.133 40.0231ZM59.9289 55.3125C59.2871 55.9748 58.408 55.8853 58.6152 55.6426L61.8823 52.2141C61.6187 53.3934 60.8402 54.3698 59.9289 55.3125ZM73.4818 52.3473C73.1711 52.4987 72.835 52.5924 72.49 52.6237C72.3975 50.82 74.1658 48.7895 75.91 47.4351C76.3787 49.3165 75.4191 51.3052 73.4818 52.3473Z" fill="#F1F1F1"/>
        </svg>
        <svg width="65" height="47" viewBox="0 0 65 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65 29.4617C65 34.1729 64.0558 38.2267 62.2683 41.1866C59.9737 44.9885 56.4071 47 51.9552 47C43.4575 47 37.7448 36.3551 31.6987 25.0863C27.3056 16.9004 21.8534 6.71429 17.3707 6.71429C15.2106 6.71429 12.5629 9.33565 10.4616 13.5545C8.05808 18.5174 6.78186 23.9492 6.72414 29.4617C6.72414 32.9028 7.35172 35.8347 8.48922 37.7203C9.54547 39.4716 10.994 40.2857 13.0448 40.2857C16.8972 40.2857 21.6265 32.1726 23.1815 29.5177C23.6306 28.7482 24.3675 28.1885 25.23 27.9616C26.0925 27.7347 27.0099 27.8592 27.7805 28.3077C28.5511 28.7562 29.1116 29.492 29.3389 30.3533C29.5661 31.2145 29.4414 32.1306 28.9922 32.9C26.4959 37.1748 24.361 40.1738 22.2681 42.3504C19.2619 45.4781 16.25 47 13.0448 47C8.59289 47 5.02629 44.9885 2.73168 41.1866C0.944181 38.2267 0 34.1729 0 29.4617C0 17.1606 6.60647 0 17.3707 0C25.8683 0 31.581 10.6449 37.6272 21.9138C42.0259 30.0996 47.4808 40.2857 51.9552 40.2857C54.006 40.2857 55.4545 39.4716 56.5108 37.7203C57.6483 35.8347 58.2759 32.9028 58.2759 29.4617C58.219 23.9494 56.9437 18.5177 54.5412 13.5545C52.4399 9.33565 49.7922 6.71429 47.6293 6.71429C46.0267 6.71429 44.0963 8.1131 41.8886 10.8632C41.3313 11.5584 40.5202 12.0041 39.6338 12.1022C38.7474 12.2003 37.8583 11.9428 37.1621 11.3863C36.4658 10.8298 36.0195 10.02 35.9212 9.13487C35.823 8.24977 36.0808 7.36196 36.6381 6.66673C40.2384 2.18214 43.833 0 47.6293 0C52.5744 0 57.1552 3.75161 60.5593 10.5638C63.4147 16.4599 64.9311 22.9128 65 29.4617Z" fill="#F8F8F8"/>
        </svg>
        <svg width="61" height="71" viewBox="0 0 61 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L5.5599 63.9032L30.4635 71L55.4401 63.8921L61 0H0ZM46.1757 53.0757L30.5111 57.529L14.8703 53.0535L13.7981 40.7299H21.4644L22.0092 46.9995L30.5222 49.4021L30.5429 49.4464L39.0368 47.093L39.9328 36.9263H22.0807L21.4453 29.0022H40.6111L41.3021 20.9196H12.0729L11.4375 13.154H49.6546L46.1757 53.0757Z" fill="#F1F1F1"/>
        </svg>
      </div>
    </div>
  )
}

export default Companies
