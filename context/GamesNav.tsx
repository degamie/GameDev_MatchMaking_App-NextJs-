//WID(23/07/2026)(Sarthak Mittal(DegamieSign(GamesNav)))#1.1.1(Impl)
import React, { useRef, useState } from 'react'
import Link from "next/link";
export default async  function GamesNav() {
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

   