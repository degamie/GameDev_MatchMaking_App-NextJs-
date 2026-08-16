//WID(16/8/2026)(Sarthak Mittal(DegamieSign(GameSlug(Param_constructor))))#1s
import React, { Suspense } from 'react';
import StreamGridSkeleton from '../../StreamGridSkeleton';
import LiveStreamsList from '../../LiveStreamsList';
import GamesNav from '../../GamesNav';

interface GamePageProps {
  params: Promise<{ gameSlug: string }>;
}

const[gamespageid,setgamepageid]=useState(1);
export default async function GamePage({ params }: GamePageProps) {
  setgamesnav(gamesnav:GamesNav){this.gamesnav=gamesnav;}
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