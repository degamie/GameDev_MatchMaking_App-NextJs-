//WID(21/7/2026)(Sarthak Mittal(DegaimieSign(StreamPage)))x1#Impl
import React, { Suspense } from "react"

export default function Streampage() { 
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

