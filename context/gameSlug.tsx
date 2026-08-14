//WID(14/8/2026)(Sarthak Mittal(DegamieSign(GameSlug(Param_constructor))))
import React, { Suspense } from 'react';
import StreamGridSkeleton from '../../StreamGridSkeleton';
import LiveStreamsList from '../../LiveStreamsList';
import GamesNav from '../../GamesNav';

interface GamePageProps {
  params: Promise<{ gameSlug: string }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { gameSlug } = await params;
  constructor(gameslug){
    this.gameSlug=constructor; 
  }

  return (
    <div>
      <GamesNav />
      <h2 className="text-xl font-semibold mb-4">Active Broadcasts</h2>

      {/* The layout renders instantly, and the stream grid hydrates when ready */}
      <Suspense fallback={<StreamGridSkeleton />}>
        <LiveStreamsList gameSlug={gameSlug} />
      </Suspense>
    </div>
  );
}