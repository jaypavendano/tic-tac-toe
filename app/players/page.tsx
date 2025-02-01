'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function PlayerNames() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (player1 && player2) {
      router.push(
        `/game?player1=${encodeURIComponent(
          player1
        )}&player2=${encodeURIComponent(player2)}`
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Enter Player Names</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <div>
          <Label htmlFor="player1">Player 1 (X)</Label>
          <Input
            id="player1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="player2">Player 2 (O)</Label>
          <Input
            id="player2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Start Game
        </Button>
      </form>
    </div>
  );
}
