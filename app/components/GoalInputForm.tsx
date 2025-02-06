'use client';

import { useState } from 'react';
import { GoalCategory, TimeFrame } from '@/app/types';

interface GoalInputFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    category: GoalCategory;
    timeFrame: TimeFrame;
  }) => Promise<void>;
  onCancel?: () => void;
}

export default function GoalInputForm({ onSubmit, onCancel }: GoalInputFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'health' as GoalCategory,
    timeFrame: 'short-term' as TimeFrame,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-white">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-200">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          placeholder="Enter goal title"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-200">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          placeholder="Describe your goal"
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-200">
          Category
        </label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as GoalCategory })}
          className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          <option value="health">Health</option>
          <option value="career">Career</option>
          <option value="learning">Learning</option>
          <option value="relationships">Relationships</option>
        </select>
      </div>

      <div>
        <label htmlFor="timeFrame" className="block text-sm font-medium text-gray-200">
          Time Frame
        </label>
        <select
          id="timeFrame"
          value={formData.timeFrame}
          onChange={(e) => setFormData({ ...formData, timeFrame: e.target.value as TimeFrame })}
          className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          <option value="short-term">Short Term (1-3 months)</option>
          <option value="medium-term">Medium Term (3-6 months)</option>
          <option value="long-term">Long Term (6+ months)</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:from-indigo-600 hover:to-purple-600 transform hover:scale-[1.02] transition-all duration-200"
        >
          Create Goal
        </button>
      </div>
    </form>
  );
}
