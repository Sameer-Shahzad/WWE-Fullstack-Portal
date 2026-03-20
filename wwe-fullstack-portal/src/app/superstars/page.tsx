import { getAllSuperstars } from "../../actions/superstars";
import WrestlerCard from "../../components/superstars/WrestlerCard";

export default async function SuperstarsPage() {
  const wrestlers = await getAllSuperstars();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-extrabold mb-10 border-l-4 border-red-600 pl-4 uppercase tracking-tighter">
        WWE Superstars
      </h1>
      
      {wrestlers && wrestlers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wrestlers.map((w: any) => (
            <WrestlerCard key={w.id} wrestler={w} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
          <p className="text-zinc-500 italic font-bold">Locker room is empty. Add wrestlers via Prisma Studio!</p>
        </div>
      )}
    </div>
  );
}