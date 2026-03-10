import Link from "next/link";

const news = [
  {
    id: 1,
    slug: "roman-returns",
    title: "Roman Reigns returns to SmackDown",
    show: "SmackDown",
    time: "2h ago",
    paragraph: "The Tribal Chief is back to claim his throne.",
  },
  {
    id: 2,
    slug: "cody-rhodes-responds",
    title: "Cody Rhodes responds to The Rock's diss",
    show: "RAW",
    time: "5h ago",
    paragraph:
      "The American Nightmare doesn't hold back in an emotional promo.",
  },
  {
    id: 3,
    slug: "john-cena-17th-title",
    title: "John Cena has won his 17th title",
    show: "RAW",
    time: "1h ago",
    paragraph: "John Cena has won his 17th title.",
  },
];

const remainingNews = [
  {
    id: 4,
    slug: "brock-wins-royal-rumble",
    title: "Brock Lesnar wins Royal Rumble",
    show: "RAW",
    time: "3h ago",
    paragraph: "Brock Lesnar wins the Royal Rumble.",
  },
  {
    id: 5,
    slug: "dolph-ziggler-chamion",
    title: "Dolph Ziggler has beaten Austin Theory",
    show: "SmackDown",
    time: "2h ago",
    paragraph:
      "Dolph Ziggler has beaten Austin Theory for the Intercontinental Championship.",
  },
];

export default function Page() {
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
                <h3 className="text-2xl text-zinc-800 group-hover:text-red-600 font-black uppercase italic tracking-tighter transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 font-medium">
                  {item.paragraph}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[11px] font-black bg-zinc-900 text-white px-3 py-1 uppercase">
                    {item.show}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-80 h-44 bg-zinc-100 border flex items-center justify-center shrink-0">
                <span className="text-zinc-400 text-xs font-bold uppercase italic">
                  WWE Media
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="my-16 w-full">
        <img
          src="ec.png"
          alt="Main Event Banner"
          className="w-full h-auto object-cover max-h-[600px] shadow-xl"
        />
      </div>

      <div className="w-full px-4 md:px-10 max-w-[1400px] mx-auto">
        {remainingNews.map((item) => (
          <Link key={item.id} href={`/news/${item.slug}`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-white border-b border-gray-100 hover:bg-gray-50 transition-all mb-4 group cursor-pointer w-full">
              <div className="flex-1">
                <h3 className="text-2xl text-zinc-800 group-hover:text-red-600 font-black uppercase italic tracking-tighter transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 font-medium pb-3">
                  {item.paragraph}
                </p>
                <span className="text-[11px] font-black bg-zinc-900 text-white px-3 py-1 uppercase">
                  {item.show}
                </span>
              </div>
              <div className="w-full md:w-80 h-44 bg-zinc-100 border flex items-center justify-center shrink-0">
                <span className="text-zinc-400 text-xs font-bold uppercase italic">
                  WWE Media
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    

      <div className="mt-20 bg-[#001e32] text-white py-14 w-full">
        <div className="w-full px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="mb-14 border-b border-white/10 pb-6">
            <p className="text-2xl text-gray-400 italic">WWE Shows</p>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-red-600">
              LATEST RESULTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col group cursor-pointer">
              <div className="h-12 mb-6 pl-40">
                <img
                  src="https://www.wwe.com/f/styles/medium/public/all/2024/12/RAW_Primary_Logo_For_Any_Background_%281%29--de3612b9543981440a24489e0e568d9b.png"
                  className="w-24 object-contain"
                  alt="RAW"
                />
              </div>
              <img
                src="raw.png"
                className="w-full h-48 object-cover border-b-4 border-transparent group-hover:border-red-600 transition-all"
                alt="Raw"
              />
              <p className="mt-4 font-bold text-lg text-white">
                Raw results, CM Punk and Roman Reigns get into intense argument
              </p>
            </div>

            <div className="flex flex-col group cursor-pointer">
              <div className="h-12 pl-41 mb-6">
                <img
                  src="https://www.wwe.com/f/styles/medium/public/all/2024/10/NXTonCW--0f06792893241464479338f55596a5bf.png"
                  className="w-24 object-contain"
                  alt="NXT"
                />
              </div>
              <img
                src="nxt.png"
                className="w-full h-48 object-cover border-b-4 border-transparent group-hover:border-red-600 transition-all"
                alt="NXT"
              />
              <p className="mt-4 font-bold text-lg text-white">
                WWE NXT results: NXT Champion Joe Hendry and North American
                Champion Myles Borne stand tall
              </p>
            </div>

            <div className="flex flex-col group cursor-pointer">
              <div className="h-12 mb-6 pl-38">
                <img
                  src="https://www.wwe.com/f/styles/medium/public/all/2024/09/Smackdown_LOGO--c8e0b09904cb1356d309a8ea2acb0422.png"
                  className="w-32 object-contain"
                  alt="SD"
                />
              </div>
              <img
                src="sd.png"
                className="w-full h-48 object-cover border-b-4 border-transparent group-hover:border-red-600 transition-all"
                alt="SD"
              />
              <p className="mt-4 font-bold text-lg text-white">
                SmackDown result: Logan Paul qualifies for Elimination Chamber
                after Drew McIntyre attacks Jacob Fatu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
