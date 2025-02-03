"use client"

import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './providers/ModalProvider';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: false
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update prompt
                  if (confirm('New version available! Update now?')) {
                    newWorker.postMessage('SKIP_WAITING');
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });

      // Handle controller change
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('New Service Worker activated');
      });
    }
  }, []);

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
        <ModalProvider>
          <Header />
          {children}
          <Navbar />
        </ModalProvider>
      </body>
    </html>
  );
}
