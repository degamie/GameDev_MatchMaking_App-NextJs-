//WID(28/07/2026)(Sarthak Mittal(DegamieSign(GamesNav)))#1.1.1(Impl)
import React, { constructor, useCallback, useRef, useState } from 'react'
import Link from "next/link";
constructor(gameid,gamenav,gamename){
      this.gameid=gameid;
      this.gamenav=gamenav;
    this.gamename=gamename;
}
const[gamerendercnt,setgamerendercnt]=useState(1);
const[gamenav,setgamenav]=useCallback(GamesNav);
export default async  function GamesNav() {
    setgameid=(gameId)=>{this.gameid=gameid;}
  setgamename=(gamename)=>{this.gamename=gamename;}//Instantiating GameName 
  const [gameid,setgameid]=useState(true);
    return (
       <><div>GamesNav</div><Link href='' className='font-bold-text-2xl'> Game Streaming</Link></>

  )
} 
  // const [navname,setnavname]=useState(true);
  // const [navigation,setnavigation]=useState(0);
  // const [navid,setnavid]=useRef(true);
  // const gameapp=await getPublishGameList();

   