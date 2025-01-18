import { D1Database } from '@cloudflare/workers-types';

declare global {
  let DB: D1Database;
  interface GlobalThis {
    DB: D1Database;
  }
}
