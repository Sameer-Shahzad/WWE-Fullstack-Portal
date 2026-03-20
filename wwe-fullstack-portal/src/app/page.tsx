import Link from "next/link";

const news1 = [
  {
    id: 1,
    slug: "roman-returns",
    title: "Roman Reigns returns to SmackDown",
    show: "SmackDown",
    time: "2h ago",
    intro: "The Tribal Chief is back to reclaim his territory.",
    paragraph: "The Tribal Chief has officially made his long-awaited return to the blue brand, sending shockwaves through the entire WWE locker room. Roman Reigns wasted no time in making his presence felt, declaring that he is back to reclaim his throne and remind every superstar that the Island of Relevancy still belongs to him.",
  },
  {
    id: 2,
    slug: "cody-rhodes-responds",
    title: "Cody Rhodes responds to The Rock's diss",
    show: "RAW",
    time: "5h ago",
    intro: "Cody Rhodes fires back at The Rock in a heated promo.",
    paragraph: "In a deeply emotional and fiery promo on RAW, the American Nightmare Cody Rhodes did not hold back in his response to The Rock's recent insults. Cody made it clear that his journey to finish the story is far from over, and no amount of Hollywood star power will stop him from reaching the pinnacle of the WWE at WrestleMania.",
  },
  {
    id: 3,
    slug: "john-cena-17th-title",
    title: "John Cena has won his 17th title",
    show: "RAW",
    time: "1h ago",
    intro: "History made as Cena captures his 17th World Title.",
    paragraph: "History has been made as the legendary John Cena has officially surpassed the record for the most world title reigns in WWE history. In a hard-fought battle that left the WWE Universe in awe, Cena captured his 17th championship, solidifying his legacy as the greatest of all time and proving that his 'Never Give Up' mantra is more alive than ever.",
  },
];

const news2 = [
  {
    id: 4,
    slug: "brock-wins-royal-rumble",
    title: "Brock Lesnar wins Royal Rumble",
    show: "RAW",
    time: "3h ago",
    intro: "The Beast dominates the 30-man Rumble match.",
    paragraph: "The Beast Incarnate Brock Lesnar has defied all odds to outlast 29 other superstars and secure his spot in the main event of WrestleMania. After entering as a surprise late entrant, Lesnar went on a rampage, eliminating several top contenders before finally tossing out the last remaining superstar to claim his second Royal Rumble victory in dominant fashion.",
  },
  {
    id: 5,
    slug: "dolph-ziggler-champion",
    title: "Dolph Ziggler has beaten Austin Theory",
    show: "SmackDown",
    time: "2h ago",
    intro: "Ziggler shocks the world by winning IC gold.",
    paragraph: "In a classic wrestling clinic on SmackDown, the 'Showstealer' Dolph Ziggler has officially captured the Intercontinental Championship by defeating Austin Theory. Despite Theory's underhanded tactics throughout the match, Ziggler's veteran experience and resilience allowed him to hit a perfectly timed Zig-Zag, securing the pinfall and beginning a new era for the prestigious title.",
  },
];

const news3 = [
  {
    id: 6,
    slug: "brock-f2f-fami",
    title: "Brock face to face with Oba Fami",
    show: "RAW",
    time: "3h ago",
    intro: "A legendary confrontation between two powerhouses.",
    paragraph: "The Beast Incarnate Brock Lesnar was left in a state of shock as the powerhouse Oba Fami completely dominated him in a physical confrontation. After being surprisingly destroyed in the middle of the ring, the tension reached a boiling point when Oba Fami officially accepted the challenge for a massive 1v1 showdown, marking a potential changing of the guard in the WWE.",
  },
  {
    id: 7,
    slug: "roman-punk-title-match",
    title: "Roman and Punk for WWE Championship",
    show: "SmackDown",
    time: "2h ago",
    intro: "Reigns and Punk set for an epic title clash.",
    paragraph: "In what is being billed as the 'End of an Era,' The Tribal Chief Roman Reigns and 'The Best in the World' CM Punk are set to collide for the WWE Championship one last time. With both superstars claiming to be the true face of the company, this high-stakes battle on SmackDown promises to settle their long-standing rivalry and determine who truly sits at the head of the table.",
  },
];

const news4 = [
  {
    id: 8,
    slug: "orton-cody-betrayal",
    title: "Randy Orton Explains Shocking Assault",
    show: "RAW",
    time: "1h ago",
    intro: "The Viper reveals the reason behind his betrayal.",
    paragraph: "The Viper Randy Orton finally broke his silence in a chilling promo, explaining his brutal and unexpected assault on Cody Rhodes. Orton made it crystal clear that he is tired of the 'American Nightmare' hogging the spotlight, boldly stating that 'Wrestling has more than one royal family' and he is here to dismantle Cody's legacy piece by piece.",
  },
  {
    id: 9,
    slug: "drew-mcintyre-quits-wwe",
    title: "Drew McIntyre Officially QUITS WWE",
    show: "SmackDown",
    time: "2h ago",
    intro: "Shockwaves as McIntyre walks out of the company.",
    paragraph: "In a moment that left the WWE Universe in absolute silence, the Scottish Warrior Drew McIntyre has officially announced his departure from the company. After months of mounting frustration and controversial losses, McIntyre dropped the microphone in the middle of the ring and walked out through the crowd, declaring to the world that he is finished with the WWE forever.",
  },
  {
    id: 10,
    slug: "mfts-wyatt-lantern-mystery",
    title: "The MFTs Steal The Wyatts’ Lantern",
    show: "SmackDown",
    time: "3h ago",
    intro: "A supernatural theft leaves SmackDown in the dark.",
    paragraph: "Tension reached a terrifying breaking point following a brutal Tag Team confrontation as The MFTs made a shocking statement against The Wyatt Sicks. After the match, the arena lights flickered as The MFTs brazenly stole the Wyatts' iconic lantern, a move that many insiders believe will lead to a supernatural and violent retaliation in the weeks to come.",
  },
  {
    id: 11,
    slug: "bella-twins-return-chaos",
    title: "Bella Twins Cost Alexa & Charlotte",
    show: "RAW",
    time: "4h ago",
    intro: "The Bellas return to ruin Charlotte's night.",
    paragraph: "The Women’s Tag Team Title scene was turned upside down as The Bella Twins made a stunning and unannounced return to SmackDown. Nikki and Brie Bella directly interfered in the high-stakes match, costing Alexa Bliss and Charlotte Flair their opportunity against The Irresistible Forces, leaving fans wondering if this is the start of one final championship run for the legendary twins.",
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
        {news1.map((item) => (
          <Link key={item.id} href={`/news/${item.slug}`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-white border-b border-gray-200 hover:bg-gray-50 transition-all mb-4 group cursor-pointer w-full">
              <div className="flex-1">
                <h3 className="text-2xl text-zinc-800 group-hover:text-red-600 font-black uppercase italic tracking-tighter transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 font-medium">
                  {item.intro}
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
          src="/ec.png" 
          alt="Main Event Banner"
          className="w-full h-auto object-cover max-h-[600px] shadow-xl"
        />
      </div>


      <div className="w-full px-4 md:px-10 max-w-[1400px] mx-auto">
        {news2.map((item) => (
          <Link key={item.id} href={`/news/${item.slug}`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-white border-b border-gray-200 hover:bg-gray-50 transition-all mb-4 group cursor-pointer w-full">
              <div className="flex-1">
                <h3 className="text-2xl text-zinc-800 group-hover:text-red-600 font-black uppercase italic tracking-tighter transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 font-medium pb-3">
                  {item.intro}
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
              <div className="h-12 mb-6 md:pl-40">
                <img
                  src="https://www.wwe.com/f/styles/medium/public/all/2024/12/RAW_Primary_Logo_For_Any_Background_%281%29--de3612b9543981440a24489e0e568d9b.png"
                  className="w-24 object-contain"
                  alt="RAW"
                />
              </div>
              <img
                src="/raw.png"
                className="w-full h-48 object-cover border-b-4 border-transparent group-hover:border-red-600 transition-all"
                alt="Raw"
              />
              <p className="mt-4 font-bold text-lg text-white">
                Raw results, CM Punk and Roman Reigns get into intense argument
              </p>
            </div>


            <div className="flex flex-col group cursor-pointer">
              <div className="h-12 md:pl-40 mb-6">
                <img
                  src="https://www.wwe.com/f/styles/medium/public/all/2024/10/NXTonCW--0f06792893241464479338f55596a5bf.png"
                  className="w-24 object-contain"
                  alt="NXT"
                />
              </div>
              <img
                src="/nxt.png"
                className="w-full h-48 object-cover border-b-4 border-transparent group-hover:border-red-600 transition-all"
                alt="NXT"
              />
              <p className="mt-4 font-bold text-lg text-white">
                WWE NXT results: NXT Champion Joe Hendry and North American Champion Myles Borne stand tall
              </p>
            </div>


            <div className="flex flex-col group cursor-pointer">
              <div className="h-12 mb-6 md:pl-32">
                <img
                  src="https://www.wwe.com/f/styles/medium/public/all/2024/09/Smackdown_LOGO--c8e0b09904cb1356d309a8ea2acb0422.png"
                  className="w-32 object-contain"
                  alt="SD"
                />
              </div>
              <img
                src="/sd.png"
                className="w-full h-48 object-cover border-b-4 border-transparent group-hover:border-red-600 transition-all"
                alt="SD"
              />
              <p className="mt-4 font-bold text-lg text-white">
                SmackDown result: Logan Paul qualifies for Elimination Chamber after Drew McIntyre attacks Jacob Fatu
              </p>
            </div>
          </div>
        </div>
      </div>


        <div className=" mt-20 w-full px-4 md:px-10 max-w-[1400px] mx-auto">
        {news3.map((item) => (
          <Link key={item.id} href={`/news/${item.slug}`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-white border-b border-gray-200 hover:bg-gray-50 transition-all mb-4 group cursor-pointer w-full">
              <div className="flex-1">
                <h3 className="text-2xl text-zinc-800 group-hover:text-red-600 font-black uppercase italic tracking-tighter transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 font-medium pb-3">
                  {item.intro}
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

       <div className="my-16 w-full">
        <img
          src="/shop.png" 
          alt="Main Event Banner"
          className="w-full h-auto object-cover max-h-[600px] shadow-xl"
        />
      </div>


       <div className="w-full px-4 md:px-10 max-w-[1400px] mx-auto">
        {news4.map((item) => (
          <Link key={item.id} href={`/news/${item.slug}`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-white border-b border-gray-200 hover:bg-gray-50 transition-all mb-4 group cursor-pointer w-full">
              <div className="flex-1">
                <h3 className="text-2xl text-zinc-800 group-hover:text-red-600 font-black uppercase italic tracking-tighter transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 font-medium">
                  {item.intro}
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

    </div>
  );
}