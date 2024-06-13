import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '$lib/server/db/schema';
import { DB_URL } from '$env/static/private';
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { neon } from '@neondatabase/serverless';

const client = neon(DB_URL);

export const db = drizzle(client, { schema });

export const adapter = new DrizzlePostgreSQLAdapter(db, schema.sessionsTable, schema.usersTable);
