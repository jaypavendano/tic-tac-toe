'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type Games = {
  status: string;
  board: string[];
};

type GameDataType = {
  totalPlayedGames: number;
  playerOneTotalWins: number;
  playerTwoTotalWins: number;
};

export default function Game() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const playerOne = searchParams.get('player1');
  const playerTwo = searchParams.get('player2');

  useEffect(() => {
    if (!playerOne || !playerTwo) {
      router.push('/players');
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameData, setGameData] = useState<GameDataType>();
  const [games, setGames] = useState<Games[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [gameTotal, setGameTotal] = useState(0);
  const [winnings, setWinnings] = useState({
    playerOne: 0,
    playerTwo: 0,
  });

  const winner = checkWinner(board);

  const handleMove = (i: number) => {
    if (board[i] !== null || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[i] = currentPlayer;

    setBoard(newBoard);
    let nextMove = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextMove);
  };

  function checkWinner(board: string[]) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  let status;

  if (winner) {
    status = `Winner: ${
      currentPlayer === 'X' ? playerOne : playerTwo
    } (${winner})`;
  } else if (board.every((cell) => cell !== null)) {
    status = 'Draw!';
  } else {
    status = `Current player: ${
      currentPlayer === 'X' ? playerOne : playerTwo
    } (${currentPlayer})`;
  }

  useEffect(() => {
    if (winner || board.every((cell) => cell !== null)) {
      setGameTotal((prev) => prev + 1);
      setWinnings((prev) => ({
        playerOne: winner === 'X' ? prev.playerOne + 1 : prev.playerOne,
        playerTwo: winner === 'O' ? prev.playerTwo + 1 : prev.playerTwo,
      }));

      setGames((prev) => [
        ...prev,

        {
          status,
          board,
        },
      ]);

      setGameData({
        totalPlayedGames: gameTotal + 1,
        playerOneTotalWins: winnings.playerOne + (winner === 'X' ? 1 : 0),
        playerTwoTotalWins: winnings.playerTwo + (winner === 'O' ? 1 : 0),
      });
      setIsDialogOpen(true);
    }
  }, [winner, board]);

  console.log({ games, gameData });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-5">
        <h1 className="uppercase font-serif text-4xl text-center font-bold mb-8">
          Tic Tac Toe
        </h1>
        <div className="mb-4 text-center  font-semibold">{status}</div>
        <div className="grid grid-cols-3 gap-2">
          {board.map((cell, i) => (
            <Button
              key={i}
              className="w-20 h-20 text-4xl font-bold"
              onClick={() => handleMove(i)}
              disabled={winner !== null}
            >
              {cell}
            </Button>
          ))}
        </div>
        <div className="font-mono flex justify-between text-sm">
          <p>
            {playerOne}:{' '}
            <span className="border p-2 rounded-sm font-bold">
              {winnings.playerOne}
            </span>
          </p>
          <p>
            {playerTwo}:{' '}
            <span className="border p-2 rounded-sm font-bold">
              {winnings.playerTwo}
            </span>
          </p>
        </div>
      </div>
      <AlertDialog open={isDialogOpen}>
        <AlertDialogContent className="w-[300px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="uppercase text-center text-xl">
              {status}
            </AlertDialogTitle>
            <AlertDialogDescription />
          </AlertDialogHeader>
          <div className="grid grid-cols-2 gap-x-1">
            <Button
              onClick={() => {
                setBoard(Array(9).fill(null));
                setCurrentPlayer('X');
                setIsDialogOpen(false);
              }}
            >
              Continue
            </Button>
            <Button variant="destructive" onClick={() => router.push('/')}>
              Stop
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
