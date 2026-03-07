import Image from "next/image";

const news = [
  { id: 1, title: "Roman Reigns returns to SmackDown", show: "SmackDown", time: "2h ago" },
  { id: 2, title: "Cody Rhodes responds to The Rock's diss", show: "RAW", time: "5h ago" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. GAP FOR NAVBAR & BLACK BAR */}
      <div className="pt-20"> 
        {/* Full width black bar */}
        <div className="bg-black text-white border-l-[10px] border-red-600 py-8 w-full flex justify-center items-center shadow-2xl">
          <h1 className="text-3xl md:text-3xl font-black uppercase italic tracking-tighter">
            WWE Raw results 10th March 2026
          </h1>
        </div>
      </div>

      {/* 2. NEWS CARDS SECTION */}
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row gap-6 p-4 border-b border-gray-200 group cursor-pointer hover:bg-gray-50 transition">
          <div className="flex-1">
            <h3 className="text-2xl text-gray-600 font-bold uppercase italic group-hover:text-red-600 hover:bold transition">
              Roman Reigns returns to SmackDown
            </h3>
            <p className="text-gray-600 mt-2 font-medium">The Tribal Chief is back to claim his throne.</p>
            <span className="inline-block mt-3 text-xs font-bold text-black px-2 py-1 ">SmackDown • 2h ago</span>
          </div>
          <div className="w-full md:w-64 h-36 bg-gray-300 rounded overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold">IMAGE HERE</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row gap-6 p-4 border-b border-gray-200 group cursor-pointer hover:bg-gray-50 transition">
          <div className="flex-1">
            <h3 className="text-2xl font-black font-bold text-gray-600 uppercase italic group-hover:text-red-600 transition">
              Cody Rhodes responds to The Rock's diss
            </h3>
            <p className="text-gray-600 mt-2 font-medium">The American Nightmare doesn't hold back in an emotional promo.</p>
            <span className="inline-block mt-3 text-xs font-bold text-black px-2 py-1 ">RAW • 5h ago</span>
          </div>
          <div className="w-full md:w-64 h-36 bg-gray-300 rounded overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold">IMAGE HERE</div>
          </div>
        </div>

      </div>
    </div>
  );
}