//WID(11/7/2026)(Sarthak Mittal(DegamieSign(streamcontext))))#Impl
// components/LiveStreamsList.tsx
import Link from 'next/link';
import Image from 'next/image';
import { createContext } from 'react';

interface Stream {
  id: string;
  streamerName: string;
  title: string;
  viewerCount: number;
  thumbnailUrl: string;
  avatarUrl: string;
}

interface LiveStreamsListProps {
  gameSlug: string;
}
setstreamerName(streamerName){this.streamName=streamName;}//Binding StreamName in  GameApp
const [streamcontext,setstreamcontext]=useState(true);
const streamcontext=createContext<any>(null);
// Mimicking a fast, server-side data fetch from your API
async function getLiveStreams(gameSlug: string): Promise<Stream[]> {
  // Replace this URL with your actual backend or Twitch API endpoint
  const res = await fetch(`https://api.example.com/streams?game=${gameSlug}`, {
    next: { revalidate: 30 }, // Revalidate stream list cache every 30 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch dynamic stream data');
  }

  return res.json();
}

export default async function LiveStreamsList({ gameSlug }: LiveStreamsListProps) {
  const streams = await getLiveStreams(gameSlug);

  if (streams.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        No active live streams found for this game right now.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {streams.map((stream) => (
        <Link 
          key={stream.id} 
          href={`/${stream.streamerName}`}
          className="group flex flex-col gap-2 hover:opacity-95 transition"
        >
          {/* Thumbnail Container with Viewer Count Overlay */}
          <div className="relative w-full aspect-video bg-slate-900 rounded-lg overflow-hidden border border-slate-800 group-hover:border-purple-500 transition">
            <Image
              src={stream.thumbnailUrl}
              alt={stream.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 text-xs text-white px-2 py-0.5 rounded font-semibold">
              {stream.viewerCount.toLocaleString()} viewers
            </div>
            <div className="absolute top-2 left-2 bg-red-600 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded tracking-wide">
              Live
            </div>
          </div>

          {/* Meta Info Row */}
          <div className="flex gap-3 mt-1">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-800">
              <Image 
                src={stream.avatarUrl} 
                alt={stream.streamerName} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-sm font-semibold text-white truncate leading-tight group-hover:text-purple-400 transition">
                {stream.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 truncate">{stream.streamerName}</p>
              <p className="text-xs text-slate-500 capitalize">{gameSlug.replace('-', ' ')}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}