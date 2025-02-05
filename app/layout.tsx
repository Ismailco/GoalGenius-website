import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Metadata } from 'next';
import Providers from './components/Providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: false
});

export const metadata: Metadata = {
  metadataBase: new URL('https://goalgenius.app'),
  title: {
    default: 'GoalGenius - Transform Your Goals into Reality',
    template: '%s | GoalGenius'
  },
  description: 'GoalGenius helps you set, track, and achieve your goals with smart tracking, daily check-ins, and intuitive progress monitoring. Transform your aspirations into achievements.',
  keywords: ['goal tracking', 'personal development', 'productivity', 'habit tracking', 'goal setting', 'achievement', 'personal growth', 'milestone tracking'],
  authors: [{ name: 'GoalGenius Team' }],
  creator: 'GoalGenius',
  publisher: 'GoalGenius',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'GoalGenius - Transform Your Goals into Reality',
    description: 'Track your progress, celebrate milestones, and achieve your dreams with GoalGenius - your personal growth companion.',
    url: 'https://goalgenius.app',
    siteName: 'GoalGenius',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'GoalGenius - Your Personal Growth Companion'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoalGenius - Transform Your Goals into Reality',
    description: 'Track your progress, celebrate milestones, and achieve your dreams with GoalGenius - your personal growth companion.',
    images: ['/twitter-image.jpg'],
    creator: '@goalgenius',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://goalgenius.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#60A5FA" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Navbar />
        </Providers>
      </body>
    </html>
  );
}
