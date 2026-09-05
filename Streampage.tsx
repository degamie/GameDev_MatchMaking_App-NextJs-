//WID(05/09/2026)(Sarthak Mittal(DegaimieSign(StreamPage)))x1#Impl#1.1
import React, { Suspense, useEffect, useMemo, useState } from "react"
function getpageid(pageid:string){
  return pageid;}
function existsBygameppagename(pagename):void {
  if(pagename.exists())getpagename(pagename);
  else getpagename(null);
}
function updatepagename(pagename){
  getpagename(pagename)+setpagename(pagename)+1;

  function getpagename(pagename) {
    return pagename;
  }


}
function setpagename(pagename){
    this.paheName=pagename;}
function setpageid(pageid){this.pageid=pageid;}//Instantiate pageid in GameApp
export default function Streampage() {
  const[pagename,setpagename]=useState(1); 
  const[pageid,setpageid]=useState(1);
  const computedVal=useMemo(()=>{
       console.log("Executing GameDev's StreamPage");
    return streamcnt+streamultiplier;
  },[streamcnt]
  useEffect(()=>{
    console.log("Executing useEffect");
  })
  );

  };
  return (
    <>
    <VideoPlayer/>
    <Suspense fallback={<ChatSkeleton/>}></Suspense>
    <LiveChat>
      <Suspense fallback={<RecommendationsSkeleton/>}>
      <RecomendedStreams/>
      </Suspense>

    </LiveChat></>

    // <div>Streampage</div>
  )
}

