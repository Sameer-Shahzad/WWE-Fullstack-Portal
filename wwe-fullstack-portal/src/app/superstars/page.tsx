import { getAllSuperstars } from "../../actions/superstars";
import { WrestlerCard } from "../../components/superstars/WrestlerCard";

export default async function SuperstarsPage() {
  const wrestlers = await getAllSuperstars();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black mb-12 border-l-8 border-red-600 pl-6 uppercase italic tracking-tighter">
          WWE Roster 2026
        </h1>

        {!wrestlers || wrestlers.length === 0 ? (
          <div className="py-20 text-center border border-zinc-800 rounded-3xl">
            <p className="text-zinc-500 font-bold italic italic">
              No superstars found in database.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wrestlers.map((w: any) => (
              <WrestlerCard key={w.id} wrestler={w} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
