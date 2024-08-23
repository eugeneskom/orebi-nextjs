import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Create the "users" table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `;

    // Insert a sample user
    await sql`
      INSERT INTO users (name, email, password)
      VALUES ('John Doe', 'john@example.com', 'password123')
      ON CONFLICT (email) DO NOTHING
    `;

    // Create the "posts" table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        user_id INTEGER REFERENCES users(id)
      )
    `;

    // Insert a sample post
    await sql`
      INSERT INTO posts (title, content, user_id)
      VALUES ('My First Post', 'This is the content of my first post.', 1)
    `;

    return NextResponse.json({ message: 'Database seeded successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}