'use client';

import { useEffect, useState } from 'react';
import { getGoals } from '@/app/lib/storage';
import GoalsList from '@/app/components/GoalsList';
import ProgressChart from '@/app/components/ProgressChart';
import MilestoneTimeline from '@/app/components/MilestoneTimeline';
import CreateGoalModal from '@/app/components/CreateGoalModal';
import GoalSuggestions from '@/app/components/GoalSuggestions';
import CreateMilestoneModal from '@/app/components/CreateMilestoneModal';
import { useModal } from '@/app/providers/ModalProvider';

export default function DashboardPage() {
  const { showModal } = useModal();
  const [stats, setStats] = useState({
    totalGoals: 0,
    averageProgress: 0,
    completedMilestones: 0
  });

  useEffect(() => {
    const goals = getGoals();

    // Calculate stats
    const totalGoals = goals.length;
    const averageProgress = goals.length > 0
      ? Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length)
      : 0;
    const completedMilestones = goals.filter(goal => goal.progress === 100).length;

    setStats({
      totalGoals,
      averageProgress,
      completedMilestones
    });
  }, []);

  return (
		<div className="min-h-screen bg-slate-900 rounded-3xl">
			<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl"></div>
			<div className="container mx-auto px-4 py-8 relative z-10">
				{/* Header Section */}
				<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 mb-8 transform hover:scale-[1.01] transition-transform border border-white/10">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div>
							<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Your Journey Dashboard</h1>
							<p className="text-gray-300 mt-2">Track your progress, achieve your dreams</p>
						</div>
						<div className="flex gap-4">
							<GoalSuggestions />
							<CreateGoalModal />
						</div>
					</div>
				</div>

				{/* Quick Stats Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
					<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 text-white transform hover:scale-[1.02] transition-all duration-200 border border-white/10">
						<div className="flex items-start justify-between">
							<div>
								<h3 className="text-lg font-semibold text-gray-300">Total Goals</h3>
								<p className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
									{stats.totalGoals}
								</p>
								<p className="text-sm text-gray-400 mt-1">Active goals this month</p>
							</div>
							<div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
								<svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
								</svg>
							</div>
						</div>
					</div>

					<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 text-white transform hover:scale-[1.02] transition-all duration-200 border border-white/10">
						<div className="flex items-start justify-between">
							<div>
								<h3 className="text-lg font-semibold text-gray-300">Progress</h3>
								<p className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
									{stats.averageProgress}%
								</p>
								<p className="text-sm text-gray-400 mt-1">Average completion rate</p>
							</div>
							<div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
								<svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
						</div>
					</div>

					<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 text-white transform hover:scale-[1.02] transition-all duration-200 border border-white/10">
						<div className="flex items-start justify-between">
							<div>
								<h3 className="text-lg font-semibold text-gray-300">Milestones</h3>
								<p className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
									{stats.completedMilestones}
								</p>
								<p className="text-sm text-gray-400 mt-1">Completed goals</p>
							</div>
							<div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
								<svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Goals Section */}
					<section className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 transform hover:scale-[1.01] transition-transform border border-white/10">
						<div className="flex items-center gap-3 mb-6">
							<div className="p-2 bg-blue-500/10 rounded-xl">
								<svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
								</svg>
							</div>
							<h2 className="text-2xl font-bold text-white">Current Goals</h2>
						</div>
						<GoalsList />
					</section>

					{/* Progress Chart Section */}
					<section className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 transform hover:scale-[1.01] transition-transform border border-white/10">
						<div className="flex items-center gap-3 mb-6">
							<div className="p-2 bg-purple-500/10 rounded-xl">
								<svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							</div>
							<h2 className="text-2xl font-bold text-white">Progress Overview</h2>
						</div>
						<ProgressChart />
					</section>
				</div>

				{/* Timeline Section */}
				<section className="mt-8 bg-white/5 backdrop-blur-lg rounded-3xl p-6 transform hover:scale-[1.01] transition-transform border border-white/10">
					<div className="flex items-center justify-between mb-6">
						<div className="flex items-center gap-3">
							<div className="p-2 bg-indigo-500/10 rounded-xl">
								<svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</div>
							<h2 className="text-2xl font-bold text-white">Milestones Timeline</h2>
						</div>
						<button
							onClick={() => showModal({
								title: 'Add Milestone',
								content: <CreateMilestoneModal />,
							})}
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
						>
							<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
							</svg>
							Add Milestone
						</button>
					</div>
					<MilestoneTimeline />
				</section>
			</div>
		</div>
	);
}
