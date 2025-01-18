'use client';

import { UserButton, useUser } from "@clerk/nextjs";

export default function UserProfile() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center gap-4">
      <p className="text-sm">
        Welcome, {user?.firstName || user?.username || 'User'}
      </p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
