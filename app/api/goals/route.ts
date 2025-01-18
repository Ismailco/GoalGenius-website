import { NextResponse } from 'next/server';
import { getAuthenticatedUserId } from '@/app/lib/auth';

const WORKER_URL = process.env.WORKER_URL || 'http://127.0.0.1:8787';

export async function GET() {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const response = await fetch(`${WORKER_URL}/api/goals`, {
      headers: {
        'X-User-Id': userId,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch goals');
    }

    const goals = await response.json();
    return NextResponse.json(goals);
  } catch (error) {
    console.error('Failed to fetch goals:', error);
    return NextResponse.json(
      { error: 'Failed to fetch goals' },
      { status: 500 }
    );
  }
}
