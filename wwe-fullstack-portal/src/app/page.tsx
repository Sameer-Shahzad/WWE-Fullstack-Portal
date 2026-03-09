"use client";
import Link from "next/link";

const news = [
  { id: 1, slug: "roman-returns", title: "Roman Reigns returns to SmackDown", show: "SmackDown", time: "2h ago", paragraph: "The Tribal Chief is back to claim his throne." },
  { id: 2, slug: "cody-rhodes-responds", title: "Cody Rhodes responds to The Rock's diss", show: "RAW", time: "5h ago", paragraph: "The American Nightmare doesn't hold back in an emotional promo." },
  { id: 3, slug: "john-cena-17th-title", title: "John Cena has won his 17th title", show: "RAW", time: "1h ago", paragraph: "John Cena has won his 17th title." },
];

const remainingNews = [
  { id: 4, slug: "brock-wins-royal-rumble", title: "Brock Lesnar wins Royal Rumble", show: "RAW", time: "3h ago", paragraph: "Brock Lesnar wins the Royal Rumble." },
  { id: 5, slug: "dolph-ziggler-chamion", title: "Dolph Ziggler has beaten Austin Theory", show: "SmackDown", time: "2h ago", paragraph: "Dolph Ziggler has beaten Austin Theory for the Intercontinental Championship." },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white pb-20 overflow-x-hidden">
      
      <div className="pt-20 mb-12 w-full"> 
        <div className="bg-black text-white border-l-[10px] border-red-600 py-10 w-full flex justify-center items-center shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-center">
            WWE News March 2026
          </h1>
        </div>
      </div>


      <div className="w-full px-4 md:px-10 max-w-[1400px] mx-auto">
        {news.map((item) => (
          <Link key={item.id} href={`/news/${item.slug}`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-white border-b border-gray-100 hover:bg-gray-50 transition-all mb-4 group cursor-pointer w-full">
              <div className="flex-1">
                <h3 className="text-2xl text-zinc-800 group-hover:text-red-600 font-black uppercase italic tracking-tighter transition-colors">{item.title}</h3>
                <p className="text-gray-600 mt-2 font-medium">{item.paragraph}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[11px] font-black bg-zinc-900 text-white px-3 py-1 uppercase">{item.show}</span>
                </div>
              </div>
              <div className="w-full md:w-80 h-44 bg-zinc-100 border flex items-center justify-center shrink-0">
                <span className="text-zinc-400 text-xs font-bold uppercase italic">WWE Media</span>
              </div>
            </div>
          </Link>
        ))}
      </div>


      <div className="my-16 w-full">
        <img 
          src="https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/02/20260218_NetworkBreakers_EC26_demand.jpg" 
          alt="Main Event Banner" 
          className="w-full h-auto object-cover max-h-[600px] shadow-xl"
        />
      </div>

      <div className="w-full px-4 md:px-10 max-w-[1400px] mx-auto">
        {remainingNews.map((item) => (
          <Link key={item.id} href={`/news/${item.slug}`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-white border-b border-gray-100 hover:bg-gray-50 transition-all mb-4 group cursor-pointer w-full">
              <div className="flex-1">
                <h3 className="text-2xl text-zinc-800 group-hover:text-red-600 font-black uppercase italic tracking-tighter transition-colors">{item.title}</h3>
                <p className="text-gray-600 mt-2 font-medium">{item.paragraph}</p>
              </div>
              <div className="w-full md:w-80 h-44 bg-zinc-100 border flex items-center justify-center shrink-0">
                <span className="text-zinc-400 text-xs font-bold uppercase italic">WWE Media</span>
              </div>
            </div>
          </Link>
        ))}
      </div>


      <div className="mt-20 bg-[#001e32] text-white py-20 w-full">
        <div className="w-full px-6 md:px-12 max-w-[1600px] mx-auto">
          
          <div className="mb-14 border-b border-white/10 pb-6">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter text-red-600">LATEST RESULTS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">


            <div className="flex flex-col group cursor-pointer">
              <img src="https://www.wwe.com/f/styles/medium/public/all/2024/12/RAW_Primary_Logo_For_Any_Background_%281%29--de3612b9543981440a24489e0e568d9b.png" className="h-12 object-contain self-start mb-6" alt="RAW" />
              <img src="https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/03/20260302_Raw.jpg" className="w-full border-b-4 border-transparent group-hover:border-red-600 transition-all" alt="Raw Result" />
              <p className="mt-4 font-bold text-lg">Raw results: CM Punk and Roman Reigns face off</p>
            </div>


            <div className="flex flex-col group cursor-pointer">
              <img src="https://www.wwe.com/f/styles/medium/public/all/2024/09/Smackdown_LOGO--c8e0b09904cb1356d309a8ea2acb0422.png" className="h-12 object-contain self-start mb-6" alt="SD" />
              <img src="https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/02/20260227_SD_FC.jpg" className="w-full border-b-4 border-transparent group-hover:border-red-600 transition-all" alt="SD Result" />
              <p className="mt-4 font-bold text-lg">Logan Paul qualifies for Elimination Chamber</p>
            </div>


            <div className="flex flex-col group cursor-pointer">
              <img src="https://www.wwe.com/f/styles/medium/public/all/2024/10/NXTonCW--0f06792893241464479338f55596a5bf.png" className="h-12 object-contain self-start mb-6" alt="NXT" />
              <img src="https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/03/20260303_NXT_Final.jpg" className="w-full border-b-4 border-transparent group-hover:border-red-600 transition-all" alt="NXT Result" />
              <p className="mt-4 font-bold text-lg">NXT Champions stand tall in main event</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}