//WID(04git   /07/2026)(Sarthak Mittal(DegamieSign(GamesNav)))#1.1
import React, { useRef } from 'react'
import Link from "next/link";
export default async  function GamesNav() {
  const [navname,setnavname]=useState(true);
  const [navigation,setnavigation]=useState(0);
  const [navid,setnavid]=useRef(true);
  const gameapp=await getPublishGameList();
  return (
    <><div>GamesNav</div><Link href='' className='font-bold-text-2xl'> Game Streaming</Link></>

  )
} 