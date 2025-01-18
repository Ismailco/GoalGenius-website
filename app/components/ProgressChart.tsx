'use client';

import { useEffect, useCallback, useState } from 'react';
import { Goal, GoalCategory } from '@/app/types';

export default function ProgressChart() {
  const [categoryProgress, setCategoryProgress] = useState<Record<GoalCategory, number>>({
    health: 0,
    career: 0,
    learning: 0,
    relationships: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategoryProgress = useCallback(async () => {
    try {
      const response = await fetch('/api/goals');
      if (!response.ok) {
        throw new Error('Failed to fetch goals');
      }
      const data = await response.json();
      const goals: Goal[] = Array.isArray(data) ? data : [];
      const progress = calculateCategoryProgress(goals);
      setCategoryProgress(progress);
    } catch (error) {
      console.error('Error fetching progress:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategoryProgress();
  }, [fetchCategoryProgress]);

  const calculateCategoryProgress = (goals: Goal[]) => {
    const categoryCounts: Record<GoalCategory, number> = {
      health: 0,
      career: 0,
      learning: 0,
      relationships: 0,
    };

    const categoryTotals: Record<GoalCategory, number> = {
      health: 0,
      career: 0,
      learning: 0,
      relationships: 0,
    };

    goals.forEach((goal) => {
      categoryCounts[goal.category]++;
      categoryTotals[goal.category] += goal.progress;
    });

    const averageProgress: Record<GoalCategory, number> = {
      health: 0,
      career: 0,
      learning: 0,
      relationships: 0,
    };

    Object.keys(categoryCounts).forEach((category) => {
      const count = categoryCounts[category as GoalCategory];
      if (count > 0) {
        averageProgress[category as GoalCategory] =
          Math.round(categoryTotals[category as GoalCategory] / count);
      }
    });

    return averageProgress;
  };

  if (loading) {
    return <div className="animate-pulse">Loading progress...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {Object.entries(categoryProgress).map(([category, progress]) => (
        <div key={category} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium capitalize">{category}</span>
            <span className="text-sm text-gray-500">{progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-indigo-600 transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
