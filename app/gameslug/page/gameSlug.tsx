// //WID(02/7/2026)(Sarthak Mittal(DegamieSign)(GamePageProps))#1
// "use-client"
// import React, { useState } from 'react'
// import { Suspense } from 'react';
// import StreamGridSkeleton from '../../StreamGridSkeleton';
// import LiveStreamsList from '../../LiveStreamsList';
// // import StreamGridSkeleton from '@/components/StreamGridSkeleton';
// // import LiveStreamsList from '@/components/LiveStreamsList';
// interface GamePageprops{
//      params:Promise<{gameslug:string}>;
// }
// export default  async function GameSlug({params}: { params: Promise<{ gameSlug: string }> }) { 
//   const[gameid,setgameid]=useState(0);
//   const [gameSlug,setgameslug]=useState(1);
//   const {gameSlug}=await params;
// return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Active Broadcasts</h2>
      
//       {/* The layout renders instantly, and the stream grid hydrates when ready */}
//       <Suspense fallback={<StreamGridSkeleton />}>
//         <LiveStreamsList gameSlug={gameSlug} />
//       </Suspense>
//     </div>
//   );
// }
