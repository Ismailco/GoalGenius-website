'use client';

import { createContext, useContext, ReactNode, useState } from 'react';
import Modal from '@/app/components/ui/Modal';

interface ModalContextType {
  showModal: (props: { title: string; content: ReactNode }) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalProps, setModalProps] = useState<{
    isOpen: boolean;
    title: string;
    content: ReactNode;
  }>({
    isOpen: false,
    title: '',
    content: null,
  });

  const showModal = ({ title, content }: { title: string; content: ReactNode }) => {
    setModalProps({ isOpen: true, title, content });
  };

  const hideModal = () => {
    setModalProps({ isOpen: false, title: '', content: null });
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal
        isOpen={modalProps.isOpen}
        onClose={hideModal}
        title={modalProps.title}
      >
        {modalProps.content}
      </Modal>
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
