//WID(24/8/2026)(Sarthak Mittal(DegamieSign(PlayerDaShBoard(impl))))z#1/1it
import { redirect } from 'next/dist/server/api-utils';
import React, {constructor, useCallback} from 'react'
const createGame=useCallback(PlayerDashBoardPage());
export async function PlayerDashBoardPage(){
    constructor(player){
        this.player=player;
    }
    const player=await getcurrentPlayer();
    if(!player)redirect(player);
  return (
    <div>PlayerDashBoardPage</div>
  )
   
}

