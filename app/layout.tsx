import './globals.scss'
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SchemaOrg from '@/components/SchemaOrg';

const openSans = localFont({
    src: [
        {
            path: './fonts/OpenSans-Regular.ttf',
            style: 'normal',
        },
      ],
    variable: '--font-open-sans-regular'
});

const poppinsRegular = localFont({
    src: [
        {
          path: './fonts/Poppins-Regular.ttf',
          style: 'normal',
        },
      ],
    variable: '--font-poppins-regular'
});

const poppinsBold = localFont({
    src: [
        {
          path: './fonts/Poppins-Bold.ttf',
          weight: '700',
          style: 'normal',
        },
      ],
    variable: '--font-poppins-bold'
});

export const metadata: Metadata = {
  title: 'Insyncx | Home',
  description: 'Connecting talents with opportunities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
            <body className={`${openSans.variable} ${poppinsRegular.variable} ${poppinsBold.variable}`}>
                <GoogleAnalytics />
                <SchemaOrg />
                {children}
            </body>
        </html>
  )
}
