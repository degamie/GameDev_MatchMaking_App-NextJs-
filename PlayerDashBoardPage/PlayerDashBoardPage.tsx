//WID(23/8/2026)(Sarthak Mittal(DegamieSign(PlayerDaShBoard(impl))))z#1
import { redirect } from 'next/dist/server/api-utils';
import React, {useCallback} from 'react'
const createGame=useCallback(PlayerDashBoardPage());
export async function PlayerDashBoardPage(){
    const player=await getcurrentPlayer();
    if(!player)redirect(player);
  return (
    <div>PlayerDashBoardPage</div>
  )
   
}

