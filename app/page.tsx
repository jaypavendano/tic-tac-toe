import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import dayjs from 'dayjs';

type Game = {
  _id: string;
  status: string;
  board: string[];
};

type HistoryEntry = {
  _id: string;
  playerOne: string;
  playerTwo: string;
  totalPlayedGames: number;
  playerOneTotalWins: number;
  playerTwoTotalWins: number;
  games: Game[];
  createdAt: string;
};

type GameHistory = {
  history: HistoryEntry[];
};

const getHistory = async (): Promise<GameHistory> => {
  try {
    const res = await fetch(`/api/get-history`);
    if (!res.ok) throw new Error('Failed to fetch data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching history:', error);
    return { history: [] };
  }
};

export default async function Home() {
  const histories = (await getHistory()).history;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="grid md:grid-cols-2 gap-10 md:gap-5 items-center">
        <div className=" grid items-center justify-items-center">
          <h1 className="uppercase font-serif text-4xl text-center font-bold mb-8">
            Tic Tac Toe
          </h1>
          <Link href="/players">
            <Button size="lg">Start Game</Button>
          </Link>
        </div>
        <div className="border rounded-lg  font-mono w-[400px]">
          <h2 className="text-xl mb-4 p-6 pb-0">HISTORY</h2>

          <ScrollArea className="h-[300px] w-full py-2">
            <div className="space-y-3 px-6">
              {histories.map((result) => (
                <div
                  key={result._id}
                  className="pb-3 border-1 border-b border-gray-300 last:border-b-0"
                >
                  <div className="sticky top-0 bg-white p-1 mb-1">
                    <p>
                      {dayjs(result.createdAt).format('MMMM D, YYYY h:mm A')}:{' '}
                      <span className="font-medium">
                        {result.playerOne} vs {result.playerTwo}
                      </span>
                    </p>
                  </div>
                  <ul className="list-decimal pl-8 text-sm">
                    {result.games.map((game, i) => (
                      <li key={i}>
                        {game.status}
                        <div className="w-[130px] grid grid-cols-3 gap-1 justify-center">
                          {game.board.map((cell, i) => (
                            <Button
                              variant="outline"
                              key={i}
                              className="w-10 font-bold aspect-square cursor-default"
                              disabled={cell === null}
                            >
                              {cell}
                            </Button>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 text-xs">
                    <p>
                      {result.playerOne}: {result.playerOneTotalWins} wins
                    </p>
                    <p>
                      {result.playerTwo}: {result.playerTwoTotalWins} wins
                    </p>
                    <p>Total Games:{result.totalPlayedGames}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
