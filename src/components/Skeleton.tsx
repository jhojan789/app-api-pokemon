export function Skeleton({ qty }: { qty: number }) {
  const cards = [];

  for (let i = 1; i <= qty; i++) {
    cards.push(<SkeletonCard key={i} />);
  }

  return cards;
}
function SkeletonCard() {
  return (
    <div
      className="flex justify-start items-center gap-7
 w-full max-w-96 min-h-36 border bg-slate-200 rounded-lg p-4 animate-pulse"
    >
      <div className=" w-28 h-28 bg-slate-400 rounded-lg animate-pulse"></div>
      <div className=" w-40 h-10 bg-slate-400 rounded-lg animate-pulse"></div>
    </div>
  );
}
