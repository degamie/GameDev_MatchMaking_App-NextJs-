//WID(25/8/2026)(Sarthak Mittal(DegamieSign(PlayerDaShBoard(impl))))z#1/1it.1
import { redirect } from 'next/dist/server/api-utils';
import React, {constructor, useCallback} from 'react'
setcreateGame(createGame){
    this.game = createGame;
}
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

