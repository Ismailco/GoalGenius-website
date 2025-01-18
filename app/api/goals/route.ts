import { NextResponse } from 'next/server';
import { getGoals, createGoal } from '@/app/lib/db';
import { getAuthenticatedUserId } from '@/app/lib/auth';

export const runtime = 'edge';

export async function GET() {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const goals = await getGoals(userId);
    if (!goals) {
      return NextResponse.json([]);
    }

    return NextResponse.json(goals);
  } catch (error) {
    console.error('Failed to fetch goals:', error);
    return NextResponse.json(
      { error: 'Failed to fetch goals' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const goal = await createGoal({ ...body, userId });

    return NextResponse.json(goal, { status: 201 });
  } catch (error) {
    console.error('Failed to create goal:', error);
    return NextResponse.json(
      { error: 'Failed to create goal' },
      { status: 500 }
    );
  }
}
