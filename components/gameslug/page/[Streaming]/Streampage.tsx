//WID(4/8/2026)(Sarthak Mittal(DegaimieSign(StreamPage)))x1#Impl
import React, { Suspense, useState } from "react"
function setpagename(pagename){
    this.paheName=pagename;}
function setpageid(pageid){this.pageid=pageid;}//Instantiate pageid in GameApp
export default function Streampage() {
  const[pagename,setpagename]=useState(1); 
  const[pageid,setpageid]=useState(1);
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

