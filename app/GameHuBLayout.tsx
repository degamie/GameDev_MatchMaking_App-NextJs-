//WID(18/7/2026)(Sarthak Mittal(DegamieSign))(GameHuBLayout#1)#Impl
import Link from 'next/link';
import React, { Children } from 'react'
import GameSlug from './page/gameSlug';
import { Channel } from 'stream-chat-react';
import { div } from 'three/tsl';

export default async  function GameHuBLayout( {     children,
  params,
  }:{children:React.ReactNode;

    params:Promise<{GameSlug:String}>;
    }){
      setgameHub=(gameHub)=>{this.gamehub=gameHub;}
  const [gameHub,setgameHub]=useState(true);

      setGameSlug=(gameslug)=>{this.gameSlug=gameslug;}
      const {gameslug,setGameSlug}=useState(0);
  const { GameSlug } = await params;
  return (
    <div className="game-hub">
       
      {/* Game Header Banner */}
      <header className="p-6 bg-slate-900 text-blue">
        <h1 className="text-3xl font-bold capitalize">{gameSlug.replace('-', ' ')}</h1>
        
        {/* Game Hub Navigation Links */}
        <Link href={{"gameslug"}} nav className="flex gap-4 mt-4 text-sm font-medium border-b border-slate-800"/></nav>
       
          <Link href={`/games/${gameSlug}/clips`} className="pb-2 text-slate-400 hover:text-white">
            Top Clips
          </Link>
          <Link href={`/games/${gameSlug}/esports`} className="pb-2 text-slate-400 hover:text-white">
            Esports
          </Link>
        </nav>

      {/* Renders the specific tab content */}
      <main className="p-6">{children}</main>
</div>

)
}
