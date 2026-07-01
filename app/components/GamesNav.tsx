//WID(27/6/2026)(Sarthak Mittal(DegamieSign(GamesNav)))
import React from 'react'
import Link from "next/link";
export default async  function GamesNav() {
  const gameapp=await getPublishGameList();
  return (
    <><div>GamesNav</div><Link href='' className='font-bold-text-2xl'> Game Streaming</Link></>

  )
} 