import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Movies</h2>
      <div className="my-6 pb-2 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Skeleton className="h-10 w-28 rounded-md" />
        <Skeleton className="h-10 w-44 rounded-md" />
        <Skeleton className="h-10 w-20 rounded-md" />
      </div>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 max-[450px]:grid-cols-1 gap-4">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="relative rounded-2xl flex-shrink-0 select-none">
            <Skeleton className="w-full h-56 max-xl:h-44 max-md:h-32 rounded-2xl" />
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}