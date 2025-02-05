import { Goal, Milestone, Note, Todo, CheckIn } from '@/app/types';

const STORAGE_KEYS = {
  GOALS: 'goals',
  MILESTONES: 'milestones',
  NOTES: 'notes',
  TODOS: 'todos',
  CHECKINS: 'checkins',
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

  milestones.push(newMilestone);
  localStorage.setItem(STORAGE_KEYS.MILESTONES, JSON.stringify(milestones));
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

export function getNotes(): Note[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.NOTES);
  return stored ? JSON.parse(stored) : [];
}

export function getNote(id: string): Note | null {
  const notes = getNotes();
  return notes.find(note => note.id === id) || null;
}

export function createNote(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Note {
  const notes = getNotes();
  const newNote: Note = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isPinned: false,
    ...note,
  };

  localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify([...notes, newNote]));
  return newNote;
}

export function updateNote(id: string, updates: Partial<Note>): Note {
  const notes = getNotes();
  const index = notes.findIndex(note => note.id === id);

  if (index === -1) throw new Error('Note not found');

  const updatedNote = {
    ...notes[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  notes[index] = updatedNote;
  localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  return updatedNote;
}

export function deleteNote(id: string): boolean {
  const notes = getNotes();
  const filtered = notes.filter(note => note.id !== id);
  localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(filtered));
  return true;
}

export function getTodos(): Todo[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.TODOS);
  return stored ? JSON.parse(stored) : [];
}

export function getTodo(id: string): Todo | null {
  const todos = getTodos();
  return todos.find(todo => todo.id === id) || null;
}

export function createTodo(todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'completed'>): Todo {
  const todos = getTodos();
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completed: false,
    ...todo,
  };

  localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify([...todos, newTodo]));
  return newTodo;
}

export function updateTodo(id: string, updates: Partial<Todo>): Todo {
  const todos = getTodos();
  const index = todos.findIndex(todo => todo.id === id);

  if (index === -1) throw new Error('Todo not found');

  const updatedTodo = {
    ...todos[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  todos[index] = updatedTodo;
  localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
  return updatedTodo;
}

export function deleteTodo(id: string): boolean {
  const todos = getTodos();
  const filtered = todos.filter(todo => todo.id !== id);
  localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(filtered));
  return true;
}

export function toggleTodoComplete(id: string): Todo {
  const todo = getTodo(id);
  if (!todo) throw new Error('Todo not found');
  return updateTodo(id, { completed: !todo.completed });
}

export function getCheckIns(): CheckIn[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.CHECKINS);
  return stored ? JSON.parse(stored) : [];
}

export function getCheckIn(id: string): CheckIn | null {
  const checkIns = getCheckIns();
  return checkIns.find(checkIn => checkIn.id === id) || null;
}

export function getCheckInByDate(date: string): CheckIn | null {
  const checkIns = getCheckIns();
  return checkIns.find(checkIn => checkIn.date === date) || null;
}

export function createCheckIn(checkIn: Omit<CheckIn, 'id' | 'createdAt' | 'updatedAt'>): CheckIn {
  const checkIns = getCheckIns();
  const newCheckIn: CheckIn = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...checkIn,
  };

  localStorage.setItem(STORAGE_KEYS.CHECKINS, JSON.stringify([...checkIns, newCheckIn]));
  return newCheckIn;
}

export function updateCheckIn(id: string, updates: Partial<CheckIn>): CheckIn {
  const checkIns = getCheckIns();
  const index = checkIns.findIndex(checkIn => checkIn.id === id);

  if (index === -1) throw new Error('Check-in not found');

  const updatedCheckIn = {
    ...checkIns[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  checkIns[index] = updatedCheckIn;
  localStorage.setItem(STORAGE_KEYS.CHECKINS, JSON.stringify(checkIns));
  return updatedCheckIn;
}

export function deleteCheckIn(id: string): boolean {
  const checkIns = getCheckIns();
  const filtered = checkIns.filter(checkIn => checkIn.id !== id);
  localStorage.setItem(STORAGE_KEYS.CHECKINS, JSON.stringify(filtered));
  return true;
}
