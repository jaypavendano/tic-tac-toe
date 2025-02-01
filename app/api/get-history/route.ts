import DBConnection from '@/lib/db-connection';
import History from '@/models/history';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await DBConnection();

    const history = await History.find().sort({ createdAt: -1 });

    return NextResponse.json({ history }, { status: 200 });
  } catch (err) {
    console.error('Error fetching history:', err);
    return NextResponse.json(
      { message: 'Error fetching history' },
      { status: 500 }
    );
  }
}
