import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shield.mk';

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
    default: 'Shield | ДЕИ и заштита од деловни измами',
    template: '%s | Shield',
  },
  description:
    'Shield им помага на малите и средни компании да спречат деловни емаил измами (ДЕИ), имперсонација и измами со социјален инженеринг пред да настане штета.',
  keywords: [
    'business email compromise',
    'bec protection',
    'email impersonation detection',
    'social engineering email attacks',
    'payment instruction fraud',
    'заштита од ДЕИ',
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
    siteName: 'Shield',
    locale: 'mk_MK',
    alternateLocale: ['en_US'],
    title: 'Shield | ДЕИ и заштита од деловни измами',
    description:
      'Спречете ДЕИ и измами со лажно претставување пред да се споделат податоци или да се префрлат средства.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Shield BEC protection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shield | BEC Protection',
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
  applicationName: 'Shield',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mk">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
