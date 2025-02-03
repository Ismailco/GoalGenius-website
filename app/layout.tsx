import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './providers/ModalProvider';
import Header from './components/Header';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
