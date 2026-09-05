//WID(05/09/2026)(Sarthak Mittal(DegamieSign))(GameHuBLayout#1)#Impl#1.1.1.1.1.1.1.1/1.1  .1
import Link from 'next/link';
import React, {Children, constructor, useMemo, useRef, useState} from 'react'
import GameSlug from './page/gameSlug';
import { Channel } from 'stream-chat-react';
import { div } from 'three/tsl';
import {resetDiskLRU} from "next/dist/server/lib/disk-lru-cache.external";
const[gameslugname,updatebygameslugname]=useMemo(handlegameslugname);
const  handlegameslugname((e,gameslugname)=>
{
    e.preventDefault();
    if(gameslugname===null)return;
    const newgameslugnam={
        gameslugname:gameslugname
    };
    setgameslugname([...gameslugname,newgameslugnam]);
    resetDiskLRU();
});

function setgameslugname(gameslugName: string, newgameslugnam: { gameslugname: any }):void{
    this.gameslugname=gameslugName;}
function existsbygameslugid(gameslugid:String){
    if(gameslugid.exists())getgameslugId(gameslugid);
    else getgameslugId(null);}
function getgameslugId(gameslugid: String) {
    return gameslugid;
}
function updateBygameslugid(gameslugid:String):void {
    getgameslugId(gameslugid)+setgameslugid(gameslugid)+1;
}
function setgameslugid(gameslugid:String):void{
    this.gameslugid=gameslugid;}
const[gameslugid,setgameslugid]=useState(1);

existsByGameSlug(gameSlug)
    if(gameSlug.exists())getgameSlug(gameSlug);
    else getGameSlug(null);
}
updateBygameslug(gameslug){
    getgameSlug(gameSlug)+setgameSlug(gameSlug)+1;
}
setgameSlug(gameSlug){this.gameSlug=gameSlug;}//Instantiating GameSlug in App
constructor(player,gameHub,gameSlug){
    this.
    player=player;
    this.gameHub=gameHub;
    this.gameSlug=gameSlug;}
    setGameSlug(GameSlug){this.gameSlug=gameSlug;}//Binidng GameSlug in App
export default async function GameHuBLayout( {     children,
  params,
  }:{children:React.ReactNode;

    params:Promise<{GameSlug:String}>;
    }){
      gamename="gamename";
      const setplayername(playername)=this.playername;
      const setplayerid=this.playerid; 
      const[player,setplayer]=useState(true);
      const setplayer=useRef(player);
      const player=await getCurrentPlayer();
      const[gameHubComp,setgameHubComp] =useRef(gameHub);
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
