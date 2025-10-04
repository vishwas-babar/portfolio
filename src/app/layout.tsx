import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@/components/Navbar/Navbar';
import ThemeMenu from '@/components/Theme/ThemeMenu';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const title = 'Vishwas Vb - Full-Stack Developer | React, NextJS, NodeJS';

const description =
  "Skilled full-stack web developer in India. I build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Hire me today!";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/images/hero-my.png',
    shortcut: '/images/hero-my.png',
    apple: '/images/hero-my.png',
  },
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  openGraph: {
    title,
    description,
    siteName: 'Vishwas Babar Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
      </body>
    </html>
  );
}
