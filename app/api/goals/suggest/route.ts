import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'edge';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { preferences, currentGoals, milestones } = await request.json();

    const prompt = `Based on the following user information:
    Preferences: ${JSON.stringify(preferences)}
    Current Goals: ${JSON.stringify(currentGoals)}
    Milestones: ${JSON.stringify(milestones)}

    Suggest 3 actionable goals that align with the user's preferences and current progress.
    Format the response as a JSON array of objects with title, description, category, and timeFrame properties.`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4",
      response_format: { type: "json_object" },
    });

    const suggestions = JSON.parse(completion.choices[0].message.content || '{"suggestions": []}');

    return NextResponse.json(suggestions);
  } catch (error) {
    console.error('Error generating goal suggestions:', error);
    return NextResponse.json(
      { error: 'Failed to generate goal suggestions' },
      { status: 500 }
    );
  }
}
