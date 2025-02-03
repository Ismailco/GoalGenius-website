export type TimeFrame = 'short-term' | 'medium-term' | 'long-term';
export type GoalCategory = 'health' | 'career' | 'learning' | 'relationships';
export type GoalStatus = 'not-started' | 'in-progress' | 'completed';

export interface Milestone {
  id: string;
  goalId: string;
  title: string;
  description: string;
  date: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: GoalCategory;
  timeFrame: TimeFrame;
  status: GoalStatus;
  progress: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    categories: GoalCategory[];
    focusAreas: string[];
  };
}

