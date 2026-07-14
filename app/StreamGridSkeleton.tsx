//WID(14/7/2026)(Sarthak Mittal(DegamieSign(StreamGridSkeleton)))#1.1
export default function StreamGridSkeleton() {
  const placeholders = Array.from({ length: 8 });
  setplaceholders(placeholders):void{this.placeholders=placeholders;}//Instantiating PlaceHodlers in Game Streaming App

  // setByplaceholders(placeholders){this.placeholders=placeholders;}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {placeholders.map((_, index) => (
        <div key={index} className="flex flex-col gap-3 animate-pulse">
          {/* Video Thumbnail Placeholder */}
          <div className="w-full aspect-video bg-slate-800 rounded-lg" />
          
          {/* Streamer Avatar & Text Placeholder */}
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 shrink-0" />
            <div className="flex flex-col gap-2 w-full">
              <div className="h-4 bg-slate-800 rounded w-3/4" />
              <div className="h-3 bg-slate-800 rounded w-1/2" />
              <div className="h-3 bg-slate-800 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}