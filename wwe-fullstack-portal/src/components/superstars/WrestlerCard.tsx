import Link from "next/link";

export function WrestlerCard({ wrestler }: { wrestler: any }) {
  const brand = wrestler?.brand?.toLowerCase() || "wwe";
  const brandColor =
    brand === "raw"
      ? "bg-red-600"
      : brand === "smackdown"
        ? "bg-blue-600"
        : "bg-zinc-800";

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
      <div className="relative h-64 w-full bg-zinc-800">
        {wrestler?.image && (
          <img
            src={wrestler.image}
            alt={wrestler.name}
            className="w-full h-full object-cover"
          />
        )}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black text-white ${brandColor}`}
        >
          {brand.toUpperCase()}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-black text-white uppercase italic">
          {wrestler?.name || "Superstar"}
        </h3>
        <p className="text-zinc-500 text-xs mt-1">
          {wrestler?.height} | {wrestler?.weight}
        </p>
        <Link
          href={`/superstars/${wrestler?.slug}`}
          className="mt-4 block w-full text-center py-2 bg-white text-black font-bold text-xs uppercase hover:bg-red-600 hover:text-white transition-all"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
