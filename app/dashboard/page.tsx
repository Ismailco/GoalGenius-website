import GoalsList from '@/app/components/GoalsList';
import ProgressChart from '@/app/components/ProgressChart';
import MilestoneTimeline from '@/app/components/MilestoneTimeline';
import CreateGoalModal from '@/app/components/CreateGoalModal';
import GoalSuggestions from '@/app/components/GoalSuggestions';

export default async function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Life Coach Dashboard</h1>
        <div className="space-x-4">
          <GoalSuggestions />
          <CreateGoalModal />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Current Goals</h2>
          <GoalsList />
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
          <ProgressChart />
        </section>
      </div>

      <section className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Milestones Timeline</h2>
        <MilestoneTimeline />
      </section>
    </div>
  );
}
