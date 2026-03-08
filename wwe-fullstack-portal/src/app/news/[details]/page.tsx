import { notFound } from "next/dist/client/components/navigation";


const news = [
  { id: 1, slug: "roman-returns", title: "Roman Reigns returns to SmackDown", show: "SmackDown", time: "2h ago", paragraph: "The Tribal Chief is back to claim his throne." },
  { id: 2, slug: "cody-rhodes-responds", title: "Cody Rhodes responds to The Rock's diss", show: "RAW", time: "5h ago", paragraph: "The American Nightmare doesn't hold back in an emotional promo." },
  { id: 3, slug: "john-cena-17th-title", title: "John Cena has won his 17th title", show: "RAW", time: "1h ago", paragraph: "John Cena has won his 17th title." },
  { id: 4, slug: "brock-wins-royal-rumble", title: "Brock Lesnar wins Royal Rumble", show: "RAW", time: "3h ago", paragraph: "Brock Lesnar wins the Royal Rumble." },
];

export default async function DetailsPage( {params}: {params: Promise<{details : string }>}) {
    const { details } = await params; 

    const displayTitle = details.replace(/-/g, ' ');
    const post = news.find((item) => item.slug === details);
    if (!post) {
        notFound(); 
    }


  return (
    <div>

    <div className="min-h-screen bg-white pt-24 p-10">
      <h1 className="text-4xl font-black uppercase italic">
        News Detail: {displayTitle}

      </h1>
      <p className="mt-6 text-gray-700">
        MAIN PAGE Where I will write detail of the post 
      </p>
    </div>
     
     
    </div>
  );
}
