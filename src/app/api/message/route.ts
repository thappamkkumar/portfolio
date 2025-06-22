import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db'; 

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill out all fields.' },
        { status: 400 }
      );
    }
		
		// Insert into DB
    const insertQuery = `INSERT INTO message (name, email, message) VALUES ($1, $2, $3 ) RETURNING *;`;
		const result = await pool.query(insertQuery, [name, email, message]);

    
		
		
    // Log or send to backend/email
    console.log('Received contact form submission:', result.rows[0])

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
