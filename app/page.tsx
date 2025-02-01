import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';

type Games = {
  status: string; // ex. 'Winnwer: PlayerName' or 'Draw'
  board: string[];
};

type History = {
  date: string;
  playerOne: string;
  playerTwo: string;
  totalPlayedGames: number;
  playerOneTotalWins: number;
  playerTwoTotalWins: number;
  games: Games[];
};

const ticTacToeHistories: History[] = [
  {
    date: '2024-11-13',
    playerOne: 'Alice',
    playerTwo: 'Bob',
    totalPlayedGames: 3,
    playerOneTotalWins: 2,
    playerTwoTotalWins: 1,
    games: [
      {
        status: 'Winner: Alice',
        board: ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'X'],
      },
      {
        status: 'Winner: Bob',
        board: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'O'],
      },
      {
        status: 'Winner: Alice',
        board: ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'],
      },
    ],
  },
  {
    date: '2024-11-12',
    playerOne: 'Charlie',
    playerTwo: 'David',
    totalPlayedGames: 2,
    playerOneTotalWins: 1,
    playerTwoTotalWins: 0,
    games: [
      {
        status: 'Draw',
        board: ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'],
      },
      {
        status: 'Winner: Charlie',
        board: ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'],
      },
    ],
  },
  {
    date: '2024-11-11',
    playerOne: 'Eve',
    playerTwo: 'Frank',
    totalPlayedGames: 2,
    playerOneTotalWins: 1,
    playerTwoTotalWins: 1,
    games: [
      {
        status: 'Winner: Eve',
        board: ['X', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'O'],
      },
      {
        status: 'Winner: Frank',
        board: ['O', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'X'],
      },
    ],
  },
  {
    date: '2024-11-10',
    playerOne: 'Grace',
    playerTwo: 'Henry',
    totalPlayedGames: 2,
    playerOneTotalWins: 0,
    playerTwoTotalWins: 1,
    games: [
      {
        status: 'Draw',
        board: ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'],
      },
      {
        status: 'Winner: Henry',
        board: ['O', 'X', 'O', 'X', 'X', 'O', 'O', 'X', 'X'],
      },
    ],
  },
  {
    date: '2024-11-09',
    playerOne: 'Ivy',
    playerTwo: 'Jack',
    totalPlayedGames: 2,
    playerOneTotalWins: 1,
    playerTwoTotalWins: 1,
    games: [
      {
        status: 'Winner: Ivy',
        board: ['X', 'X', 'X', 'O', 'O', 'X', 'O', 'X', 'O'],
      },
      {
        status: 'Winner: Jack',
        board: ['O', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'X'],
      },
    ],
  },
  {
    date: '2024-11-08',
    playerOne: 'Kevin',
    playerTwo: 'Lily',
    totalPlayedGames: 2,
    playerOneTotalWins: 1,
    playerTwoTotalWins: 0,
    games: [
      {
        status: 'Winner: Kevin',
        board: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
      },
      {
        status: 'Draw',
        board: ['O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'],
      },
    ],
  },
  {
    date: '2024-11-07',
    playerOne: 'Mason',
    playerTwo: 'Nina',
    totalPlayedGames: 2,
    playerOneTotalWins: 1,
    playerTwoTotalWins: 0,
    games: [
      {
        status: 'Winner: Mason',
        board: ['O', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'X'],
      },
      {
        status: 'Draw',
        board: ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'],
      },
    ],
  },
  {
    date: '2024-11-06',
    playerOne: 'Oliver',
    playerTwo: 'Paige',
    totalPlayedGames: 2,
    playerOneTotalWins: 0,
    playerTwoTotalWins: 1,
    games: [
      {
        status: 'Draw',
        board: ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'],
      },
      {
        status: 'Winner: Paige',
        board: ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'O'],
      },
    ],
  },
  {
    date: '2024-11-05',
    playerOne: 'Quinn',
    playerTwo: 'Ryan',
    totalPlayedGames: 2,
    playerOneTotalWins: 1,
    playerTwoTotalWins: 1,
    games: [
      {
        status: 'Winner: Quinn',
        board: ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'X'],
      },
      {
        status: 'Winner: Ryan',
        board: ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'],
      },
    ],
  },
  {
    date: '2024-11-04',
    playerOne: 'Sophia',
    playerTwo: 'Tyler',
    totalPlayedGames: 2,
    playerOneTotalWins: 1,
    playerTwoTotalWins: 0,
    games: [
      {
        status: 'Winner: Sophia',
        board: ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'],
      },
      {
        status: 'Draw',
        board: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'O'],
      },
    ],
  },
];

export default function Home() {
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
              {ticTacToeHistories.map((result, index) => (
                <div
                  key={index}
                  className="pb-3 border-1 border-b border-gray-300 last:border-b-0"
                >
                  <div className="sticky top-0 bg-white p-1 mb-1">
                    <p>
                      {result.date}:{' '}
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
