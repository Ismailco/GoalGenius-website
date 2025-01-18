'use client';

import { useEffect, useState } from 'react';
import { Goal } from '@/app/types';

export default function GoalsList() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await fetch('/api/goals');
      if (!response.ok) {
        throw new Error('Failed to fetch goals');
      }
      const data = await response.json();
      // Ensure data is an array
      setGoals(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching goals:', error);
      setError('Failed to load goals');
      setGoals([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="animate-pulse">Loading goals...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {goals.length === 0 ? (
        <p className="text-gray-500">No goals yet. Add your first goal!</p>
      ) : (
        goals.map((goal) => (
          <div
            key={goal.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{goal.title}</h3>
              <span className="text-sm px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">
                {goal.category}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{goal.description}</p>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-500">{goal.timeFrame}</span>
                <span className="text-sm text-gray-500">{goal.progress}%</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
