//WID(18/7/2026)(Sarthak Mittal(DegaimieSign(StreamPage)))x1
import React, { Suspense } from "react"

export default function Streampage() { 
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

