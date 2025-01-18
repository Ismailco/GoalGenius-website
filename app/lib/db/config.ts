import { D1Database } from '@cloudflare/workers-types';
import './types';

export function bindD1Database(db: D1Database) {
  (globalThis as unknown as { DB: D1Database }).DB = db;
}
