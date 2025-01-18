'use client';

import { useState } from 'react';
import { GoalCategory, TimeFrame } from '@/app/types';
import GoalInputForm from './GoalInputForm';

export default function CreateGoalModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (data: {
    title: string;
    description: string;
    category: GoalCategory;
    timeFrame: TimeFrame;
  }) => {
    try {
      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          status: 'not-started',
          progress: 0,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create goal');
      }

      setIsOpen(false);
      // You might want to trigger a refresh of the goals list here
    } catch (error) {
      console.error('Error creating goal:', error);
      alert('Failed to create goal. Please try again.');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add New Goal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create New Goal</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <GoalInputForm onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </>
  );
}
