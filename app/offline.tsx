'use client';

import { useEffect, useState } from 'react';

export default function Offline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Desktop version */}
          <div className="hidden sm:block">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-64 h-64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="relative z-10 space-y-8">
                <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  No Connection Found
                </h1>
                <p className="text-xl text-gray-400">
                  Don&apos;t worry, you can still access your previously loaded goals and data.
                </p>
                <div className="animate-pulse flex justify-center space-x-4">
                  <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
                  <div className="h-3 w-3 bg-blue-300 rounded-full"></div>
                  <div className="h-3 w-3 bg-blue-200 rounded-full"></div>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="sm:hidden space-y-6">
            <svg className="w-24 h-24 mx-auto text-blue-400 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              No Connection
            </h1>
            <p className="text-sm text-gray-400">
              You&apos;re offline. Check your connection.
            </p>
            <div className="animate-pulse flex justify-center space-x-2">
              <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
              <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
              <div className="h-2 w-2 bg-blue-200 rounded-full"></div>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try Again
            </button>
          </div>

          {/* Online status indicator */}
          <div className="mt-8">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
