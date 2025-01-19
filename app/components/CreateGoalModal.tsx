'use client';

import { useState } from 'react';
import { GoalCategory, TimeFrame } from '@/app/types';
import { createGoal } from '@/app/lib/storage';
import { useModal } from '@/app/providers/ModalProvider';
import GoalInputForm from './GoalInputForm';

export default function CreateGoalModal() {
  const { showModal, hideModal } = useModal();

  const handleSubmit = async (data: {
    title: string;
    description: string;
    category: GoalCategory;
    timeFrame: TimeFrame;
  }) => {
    try {
      createGoal({
        ...data,
        status: 'not-started',
        progress: 0,
      });
      hideModal();
      window.location.reload();
    } catch (error) {
      console.error('Error creating goal:', error);
      alert('Failed to create goal. Please try again.');
    }
  };

  return (
    <button
      onClick={() => showModal({
        title: 'Create New Goal',
        content: <GoalInputForm onSubmit={handleSubmit} />,
      })}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
    >
      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Add Goal
    </button>
  );
}
