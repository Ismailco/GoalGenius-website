'use client';

import { useEffect, useState } from 'react';
import { Milestone } from '@/app/types';
import { getMilestones } from '@/app/lib/storage';
import { getGoals } from '@/app/lib/storage';
import { Goal } from '@/app/types';

export default function MilestoneTimeline() {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  // const [isAddingMilestone, setIsAddingMilestone] = useState(false);
  // const [editingMilestone, setEditingMilestone] = useState<Milestone | null>(null);
  // const [newMilestone, setNewMilestone] = useState({
  //   title: '',
  //   description: '',
  //   date: new Date().toISOString().split('T')[0],
  // });
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    setMilestones(getMilestones());
    setLoading(false);
    const fetchedGoals = getGoals();
    setGoals(fetchedGoals);
  }, []);

  console.log(milestones);

  // const handleCreateMilestone = () => {
  //   try {
  //     createMilestone(newMilestone);
  //     setMilestones(getMilestones());
  //     setIsAddingMilestone(false);
  //     setNewMilestone({
  //       title: '',
  //       description: '',
  //       date: new Date().toISOString().split('T')[0],
  //     });
  //   } catch (error) {
  //     console.error('Error creating milestone:', error);
  //     alert('Failed to create milestone');
  //   }
  // };

  // const handleUpdateMilestone = (id: string, updates: Partial<Milestone>) => {
  //   try {
  //     updateMilestone(id, updates);
  //     setMilestones(getMilestones());
  //     setEditingMilestone(null);
  //   } catch (error) {
  //     console.error('Error updating milestone:', error);
  //     alert('Failed to update milestone');
  //   }
  // };

  // const handleDeleteMilestone = (id: string) => {
  //   if (window.confirm('Are you sure you want to delete this milestone?')) {
  //     try {
  //       deleteMilestone(id);
  //       setMilestones(getMilestones());
  //     } catch (error) {
  //       console.error('Error deleting milestone:', error);
  //       alert('Failed to delete milestone');
  //     }
  //   }
  // };


  const getStatusColor = (progress: number) => {
    if (progress === 100) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    if (progress >= 50) return 'bg-gradient-to-r from-blue-500 to-purple-500';
    return 'bg-gradient-to-r from-purple-500/50 to-blue-500/50';
  };

  if (loading) {
    return <div className="animate-pulse">Loading milestones...</div>;
  }

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-indigo-500/20"></div>

      <div className="space-y-8">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="relative flex items-start group"
          >
            {/* Timeline Dot */}
            <div className={`
              absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white/20
              ${getStatusColor(goal.progress)}
            `}>
              <div className="absolute inset-0 rounded-full animate-ping bg-white/20 group-hover:bg-white/30"></div>
            </div>

            {/* Content Card */}
            <div className="ml-16 bg-white/5 backdrop-blur-lg rounded-2xl p-6 w-full transform hover:scale-[1.02] transition-all duration-200 border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{goal.title}</h3>
                  <p className="text-sm text-gray-400">{goal.timeFrame}</p>
                </div>
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${goal.progress === 100 ? 'bg-green-500/20 text-green-300' :
                    goal.progress >= 50 ? 'bg-blue-500/20 text-blue-300' :
                    'bg-purple-500/20 text-purple-300'}
                `}>
                  {goal.progress}% Complete
                </span>
              </div>

              <p className="text-gray-300 mb-4">{goal.description}</p>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${getStatusColor(goal.progress)}`}
                  style={{ width: `${goal.progress}%` }}
                />
              </div>

              {/* Milestones */}
              <div className="mt-4 space-y-2">
                {[25, 50, 75, 100].map((milestone) => (
                  <div
                    key={milestone}
                    className={`flex items-center gap-2 ${
                      goal.progress >= milestone ? 'text-gray-300' : 'text-gray-500'
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        goal.progress >= milestone ? 'text-blue-400' : 'text-gray-500'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {goal.progress >= milestone ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      )}
                    </svg>
                    <span className="text-sm">
                      {milestone}% Milestone {goal.progress >= milestone ? '(Achieved)' : '(Pending)'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
