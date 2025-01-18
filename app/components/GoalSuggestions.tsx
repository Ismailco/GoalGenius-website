'use client';

import { useState } from 'react';
import { Goal, GoalCategory, TimeFrame } from '@/app/types';

interface SuggestedGoal {
  title: string;
  description: string;
  category: GoalCategory;
  timeFrame: TimeFrame;
}

export default function GoalSuggestions() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestedGoal[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSuggestions = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch current goals and milestones for context
      const [goalsRes, milestonesRes] = await Promise.all([
        fetch('/api/goals'),
        fetch('/api/milestones')
      ]);

      if (!goalsRes.ok || !milestonesRes.ok) {
        throw new Error('Failed to fetch current goals or milestones');
      }

      const goals: Goal[] = await goalsRes.json();
      const milestones = await milestonesRes.json();

      // Get suggestions from OpenAI
      const response = await fetch('/api/goals/suggest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentGoals: goals,
          milestones,
          preferences: {
            categories: ['health', 'career', 'learning', 'relationships'],
            focusAreas: ['personal growth', 'professional development'],
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get suggestions');
      }

      const data = await response.json();
      setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
      setIsOpen(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setError('Failed to get goal suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateGoal = async (suggestion: SuggestedGoal) => {
    try {
      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...suggestion,
          status: 'not-started',
          progress: 0,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create goal');
      }

      setIsOpen(false);
      setSuggestions([]); // Clear suggestions after creating a goal
    } catch (error) {
      console.error('Error creating goal:', error);
      alert('Failed to create goal. Please try again.');
    }
  };

  return (
    <>
      <button
        onClick={fetchSuggestions}
        disabled={loading}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Generating Suggestions...
          </>
        ) : (
          'Get AI Goal Suggestions'
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Suggested Goals</h2>
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

            {error ? (
              <div className="text-red-500 mb-4">{error}</div>
            ) : suggestions.length === 0 ? (
              <div className="text-gray-500">No suggestions available. Try again?</div>
            ) : (
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{suggestion.title}</h3>
                        <p className="text-gray-600 mt-1">{suggestion.description}</p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-sm px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">
                            {suggestion.category}
                          </span>
                          <span className="text-sm px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                            {suggestion.timeFrame}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCreateGoal(suggestion)}
                        className="ml-4 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add Goal
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
