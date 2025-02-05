'use client';

import { ModalProvider } from '../providers/ModalProvider';
import ServiceWorkerProvider from '../providers/ServiceWorkerProvider';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServiceWorkerProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ServiceWorkerProvider>
  );
}
