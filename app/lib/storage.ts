import { Goal, Milestone } from '@/app/types';

const STORAGE_KEYS = {
  GOALS: 'goals',
  MILESTONES: 'milestones',
};

export function getGoals(): Goal[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.GOALS);
  return stored ? JSON.parse(stored) : [];
}

export function getGoal(id: string): Goal | null {
  const goals = getGoals();
  return goals.find(goal => goal.id === id) || null;
}

export function createGoal(goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>): Goal {
  const goals = getGoals();
  const newGoal: Goal = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...goal,
  };

  localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify([...goals, newGoal]));
  return newGoal;
}

export function updateGoal(id: string, updates: Partial<Goal>): Goal {
  const goals = getGoals();
  const index = goals.findIndex(goal => goal.id === id);

  if (index === -1) throw new Error('Goal not found');

  const updatedGoal = {
    ...goals[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  goals[index] = updatedGoal;
  localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(goals));
  return updatedGoal;
}

export function deleteGoal(id: string): boolean {
  const goals = getGoals();
  const filtered = goals.filter(goal => goal.id !== id);
  localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(filtered));
  return true;
}

export function getMilestones(): Milestone[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.MILESTONES);
  return stored ? JSON.parse(stored) : [];
}

export function getMilestone(id: string): Milestone | null {
  const milestones = getMilestones();
  return milestones.find(milestone => milestone.id === id) || null;
}

export function createMilestone(milestone: Omit<Milestone, 'id'>): Milestone {
  const milestones = getMilestones();
  const newMilestone: Milestone = {
    id: crypto.randomUUID(),
    ...milestone,
  };

  localStorage.setItem(STORAGE_KEYS.MILESTONES, JSON.stringify([...milestones, newMilestone]));
  return newMilestone;
}

export function updateMilestone(id: string, updates: Partial<Milestone>): Milestone {
  const milestones = getMilestones();
  const index = milestones.findIndex(milestone => milestone.id === id);

  if (index === -1) throw new Error('Milestone not found');

  const updatedMilestone = {
    ...milestones[index],
    ...updates,
  };

  milestones[index] = updatedMilestone;
  localStorage.setItem(STORAGE_KEYS.MILESTONES, JSON.stringify(milestones));
  return updatedMilestone;
}

export function deleteMilestone(id: string): boolean {
  const milestones = getMilestones();
  const filtered = milestones.filter(milestone => milestone.id !== id);
  localStorage.setItem(STORAGE_KEYS.MILESTONES, JSON.stringify(filtered));
  return true;
}
