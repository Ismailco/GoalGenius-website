'use client';

import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9999] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex min-h-screen items-center justify-center p-4">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Modal panel */}
          <div className="relative w-full max-w-lg bg-slate-900/95 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
            <div className="absolute top-4 right-4">
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6" id="modal-title">
                {title}
              </h3>
              <div className="mt-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
