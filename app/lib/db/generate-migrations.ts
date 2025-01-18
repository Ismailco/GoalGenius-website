import { schema } from './schema';
import fs from 'fs';
import path from 'path';

const migrationsDir = path.join(process.cwd(), 'migrations');

// Create migrations directory if it doesn't exist
if (!fs.existsSync(migrationsDir)) {
  fs.mkdirSync(migrationsDir);
}

// Generate SQL file from schema
const sql = Object.values(schema).join('\n\n');
const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
const filename = path.join(migrationsDir, `${timestamp}_initial.sql`);

fs.writeFileSync(filename, sql);

console.log(`Migration file created: ${filename}`);
