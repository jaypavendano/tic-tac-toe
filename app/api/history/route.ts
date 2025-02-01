import DBConnection from '@/lib/db-connection';
import History from '@/models/history';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await DBConnection();
    const {
      playerOne,
      playerTwo,
      totalPlayedGames,
      playerOneTotalWins,
      playerTwoTotalWins,
      games,
    } = await req.json();
    const newHistory = new History({
      playerOne,
      playerTwo,
      totalPlayedGames,
      playerOneTotalWins,
      playerTwoTotalWins,
      games,
    });

    await newHistory.save();

    return NextResponse.json(
      { message: 'History saved successfully' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error saving history:', err);
    return NextResponse.json(
      { message: 'Error saving history' },
      { status: 500 }
    );
  }
}
