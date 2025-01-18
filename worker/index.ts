import { D1Database } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const userId = request.headers.get('X-User-Id');

    if (!userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    try {
      // Handle goals endpoints
      if (url.pathname.startsWith('/api/goals')) {
        if (request.method === 'GET') {
          const stmt = env.DB.prepare(
            'SELECT * FROM goals WHERE userId = ? ORDER BY createdAt DESC'
          );
          const { results } = await stmt.bind(userId).all();
          return new Response(JSON.stringify(results), {
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }

      // Handle milestones endpoints
      if (url.pathname.startsWith('/api/milestones')) {
        if (request.method === 'GET') {
          const stmt = env.DB.prepare(`
            SELECT m.*
            FROM milestones m
            JOIN goals g ON m.goalId = g.id
            WHERE g.userId = ?
            ORDER BY m.date ASC
          `);
          const { results } = await stmt.bind(userId).all();
          return new Response(JSON.stringify(results), {
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }

      return new Response('Not Found', { status: 404 });
    } catch (error) {
      console.error('Error processing request:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to process request' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  },
};
