import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://emailshield.mk';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'emailShield | BEC и заштита од деловни измами',
    template: '%s | emailShield',
  },
  description:
    'emailShield им помага на малите и средни компании да спречат business email compromise (BEC), имперсонација и измами со социјален инженеринг пред да настане штета.',
  keywords: [
    'business email compromise',
    'bec protection',
    'email impersonation detection',
    'social engineering email attacks',
    'payment instruction fraud',
    'заштита од BEC',
    'деловна имперсонација',
    'лажна фактура',
    'социјален инженеринг',
    'email security for smb',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'mk-MK': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'emailShield',
    locale: 'mk_MK',
    alternateLocale: ['en_US'],
    title: 'emailShield | BEC и заштита од деловни измами',
    description:
      'Спречете BEC и измами со лажно претставување пред да се споделат податоци или да се префрлат средства.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'emailShield BEC protection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'emailShield | BEC Protection',
    description:
      'Protect your business from deception, impersonation, and social engineering in business email.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  category: 'Cybersecurity',
  applicationName: 'emailShield',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mk">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
