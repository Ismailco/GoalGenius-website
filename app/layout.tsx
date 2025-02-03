'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './providers/ModalProvider';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { Workbox } from 'workbox-window';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js');

      wb.addEventListener('waiting', () => {
        if (confirm('A new version is available. Reload to update?')) {
          wb.addEventListener('controlling', () => {
            window.location.reload();
          });
          wb.messageSkipWaiting();
        }
      });

      wb.register();
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#60A5FA" />
      </head>
      <body className={inter.className}>
        <ModalProvider>
          <Header />
          {children}
          <Navbar />
        </ModalProvider>
      </body>
    </html>
  );
}
