//WID(07/08/2026)(Sarthak Mittal(DegamieSign)(GamePageProps))#1.1/1s.,1
"use-client"
import React, { useCallback, useState } from 'react'
import { Suspense } from 'react';
import StreamGridSkeleton from '../../StreamGridSkeleton';
import LiveStreamsList from '../../LiveStreamsList';
import GamesNav from '../../GamesNav';
// import StreamGridSkeleton from '@/components/StreamGridSkeleton';
// import LiveStreamsList from '@/components/LiveStreamsList';
interface GamePageprops{
     params:Promise<{gameslug:string}>;
}
updateBygameSlug(GameSlug){
  getgameSlug(gameSlug)+setGameSlug(GameSlug)+1;
}
getgameSlug(gameSlug){return gameSlug;}
setgameslugname(gameslugname){this.gameslugname=gameslugname;}
const getgameSlug(gameSlug)=useCallback(GameSlug);//Fetching GameSlug in GameApp
constructor(GamesNav){this.gamesnav=GamesNav;}
const[gameslugname,setgameslugname]=useRef(()=>{gameslugname});
constructor(GameSlug:string,gameid:string, GameSlugname:string){
  this.gameSlug=GameSlug;
}
setgameslugname=(GameSlugname)=>{this.GameSlugname=GameSlugname;}//Instantiating GameSlugName in App
setgameSlug=(GameSlug)=>{this.gameSlug=GameSlug;}//Instantiating GameSlug in GameApp
  setgameid=(gameid)=>{this.gameId=gameid;}//GameId's Instantiate
export default  async function GameSlug({params}: { params: Promise<{ gameSlug: string }> }) { 

  const[gameid,setgameid]=useState(0);
  const [gameSlug,setgameslug]=useState(1);
  const {gameSlug}=await params;
return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Active Broadcasts</h2>
      
      {/* The layout renders instantly, and the stream grid hydrates when ready */}
      <Suspense fallback={<StreamGridSkeleton />}>
        <LiveStreamsList gameSlug={gameSlug} />
      </Suspense>
    </div>
  );
}
