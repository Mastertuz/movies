import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      <div className="mb-10">
        <Skeleton className="w-full h-[600px] rounded-3xl" />
      </div>
      <div className="flex flex-col space-y-10 max-lg:space-y-6 mb-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 max-[450px]:grid-cols-1 gap-4">
              {[...Array(4)].map((_, j) => (
                <Skeleton
                  key={j}
                  className="w-full h-56 max-xl:h-44 max-md:h-32 rounded-2xl"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}