import Link from "next/dist/client/link";
import Image from "next/image";

const news = [
  { id: 1, slug: "roman-returns", title: "Roman Reigns returns to SmackDown", show: "SmackDown", time: "2h ago", paragraph: "The Tribal Chief is back to claim his throne." },
  { id: 2, slug: "cody-rhodes-responds", title: "Cody Rhodes responds to The Rock's diss", show: "RAW", time: "5h ago", paragraph: "The American Nightmare doesn't hold back in an emotional promo." },
  { id: 3, slug: "john-cena-17th-title", title: "John Cena has won his 17th title", show: "RAW", time: "1h ago", paragraph: "John Cena has won his 17th title." },
  { id: 4, slug: "brock-wins-royal-rumble", title: "Brock Lesnar wins Royal Rumble", show: "RAW", time: "3h ago", paragraph: "Brock Lesnar wins the Royal Rumble." },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="pt-20 mb-12"> 
        <div className="bg-black text-white border-l-[10px] border-red-600 py-8 w-full flex justify-center items-center shadow-2xl">
          <h1 className="text-3xl md:text-3xl font-black uppercase italic tracking-tighter">
            WWE Raw highlights 10th March 2026
          </h1>
        </div>
      </div>

      {news.map((newsItem) => (
       <Link href={`/news/${newsItem.slug}`} key={newsItem.id}>
          <div className="flex flex-col md:flex-row gap-6 p-5 bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 mx-4 md:mx-14 mb-5 group cursor-pointer rounded-sm">
            
            <div className="flex-1">
              <h3 className="text-2xl text-zinc-800 group-hover:text-red-500 font-bold uppercase italic transition-colors">
                {newsItem.title}
              </h3>
              <p className="text-gray-500 mt-2 font-medium line-clamp-2">
                {newsItem.paragraph}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[10px] font-black bg-zinc-100 text-zinc-600 px-2 py-1 uppercase tracking-tighter">
                  {newsItem.show}
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase">
                  • {newsItem.time}
                </span>
              </div>
            </div>

            <div className="w-full md:w-64 h-36 bg-zinc-50 flex items-center justify-center border border-gray-100">
              <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest italic">WWE Media</span>
            </div>
          </div>
        </Link>
      ))}

    </div>
  );
}