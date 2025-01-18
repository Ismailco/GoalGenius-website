import { NextRequest, NextResponse } from 'next/server';
import { getMilestone, updateMilestone, deleteMilestone } from '@/app/lib/db';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params;
    const milestone = await getMilestone(id);
    if (!milestone) {
      return NextResponse.json(
        { error: 'Milestone not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(milestone);
  } catch (error) {
    console.error('Failed to fetch milestone:', error);
    return NextResponse.json(
      { error: 'Failed to fetch milestone' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params;
    const body = await request.json();
    const milestone = await updateMilestone(id, body);
    return NextResponse.json(milestone);
  } catch (error) {
    console.error('Failed to update milestone:', error);
    return NextResponse.json(
      { error: 'Failed to update milestone' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params;
    const success = await deleteMilestone(id);
    if (!success) {
      return NextResponse.json(
        { error: 'Milestone not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete milestone:', error);
    return NextResponse.json(
      { error: 'Failed to delete milestone' },
      { status: 500 }
    );
  }
}
