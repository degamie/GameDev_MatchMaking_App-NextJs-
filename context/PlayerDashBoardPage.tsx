//WID(1/8/2026)(Sarthak Mittal(DegamieSign(PlayerDaShBoard(impl))))
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

export async function PlayerDashBoardPage(){
    const player=await getcurrentPlayer();
    if(!player)redirect(player);
  return (
    <div>PlayerDashBoardPage</div>
  )
   
}

