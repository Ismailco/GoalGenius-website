'use client';

import { useState } from 'react';
import { Goal, GoalCategory } from '@/app/types';
import { createMilestone } from '@/app/lib/storage';
import { useModal } from '@/app/providers/ModalProvider';
import { getGoals } from '@/app/lib/storage';

interface CreateMilestoneModalProps {
  selectedGoal?: Goal;
}

export default function CreateMilestoneModal({ selectedGoal }: CreateMilestoneModalProps) {
  const { hideModal } = useModal();
  const [goals] = useState<Goal[]>(getGoals());
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    goalId: selectedGoal?.id || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.goalId) {
      alert('Please select a goal');
      return;
    }
    try {
      createMilestone({
        ...formData,
      });
      hideModal();
      window.location.reload();
    } catch (error) {
      console.error('Error creating milestone:', error);
      alert('Failed to create milestone. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="goalId" className="block text-sm font-medium text-gray-300 mb-1">
          Select Goal
        </label>
        <select
          id="goalId"
          value={formData.goalId}
          onChange={(e) => setFormData({ ...formData, goalId: e.target.value })}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          required
        >
          <option value="">Select a goal</option>
          {Object.entries(
            goals.reduce((acc, goal) => {
              if (!acc[goal.category]) {
                acc[goal.category] = [];
              }
              acc[goal.category].push(goal);
              return acc;
            }, {} as Record<GoalCategory, Goal[]>)
          ).map(([category, categoryGoals]) => (
            <optgroup key={category} label={category.charAt(0).toUpperCase() + category.slice(1)}>
              {categoryGoals.map((goal) => (
                <option key={goal.id} value={goal.id}>
                  {goal.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          rows={3}
          required
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
          Target Date
        </label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          required
        />
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={hideModal}
          className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-colors"
        >
          Create Milestone
        </button>
      </div>
    </form>
  );
}
