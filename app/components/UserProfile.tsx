'use client';

export default function UserProfile({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className={`flex items-center gap-4 ${isMobile ? 'flex-row' : 'flex-row-reverse'}`}>
      <button
        className={`rounded-full bg-white/5 border border-white/10 p-2 hover:bg-white/10 backdrop-blur-lg transform hover:scale-105 transition-all duration-200 ${
          isMobile ? 'mr-3' : ''
        }`}
        onClick={() => {
          // You can add any profile-related functionality here
          console.log('Profile clicked');
        }}
      >
        <svg
          className="h-6 w-6 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
      <p className="text-sm text-gray-300">Welcome, Guest</p>
    </div>
  );
}
