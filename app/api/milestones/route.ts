import { NextResponse } from 'next/server';
import { getMilestones, createMilestone } from '@/app/lib/db';
import { getAuthenticatedUserId } from '@/app/lib/auth';

export async function GET() {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const milestones = await getMilestones(userId);
    if (!milestones) {
      return NextResponse.json([]);
    }

    return NextResponse.json(milestones);
  } catch (error) {
    console.error('Failed to fetch milestones:', error);
    return NextResponse.json(
      { error: 'Failed to fetch milestones' },
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
    const milestone = await createMilestone({ ...body, userId });

    return NextResponse.json(milestone, { status: 201 });
  } catch (error) {
    console.error('Failed to create milestone:', error);
    return NextResponse.json(
      { error: 'Failed to create milestone' },
      { status: 500 }
    );
  }
}
