//WID(26/8/2026)(Sarthak Mittal(DegamieSign(PlayerDaShB oard(impl))))z#1/1it.1
import { redirect } from 'next/dist/server/api-utils';
import React, {constructor, useCallback, useMemo} from 'react'
setcreateGame(createGame){
    this.game = createGame;
}
const createGame=useCallback(PlayerDashBoardPage());
export async function PlayerDashBoardPage(){
    const setplayer=useMemo(this.player);
    constructor(player){
        this.player=player;
    }
    const player=await getcurrentPlayer();
    if(!player)redirect(player);
  return (
    <div>PlayerDashBoardPage</div>
  )
   
}

