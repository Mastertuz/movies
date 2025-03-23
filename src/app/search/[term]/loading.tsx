import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="my-10">
      <Skeleton className="h-8 w-48 mb-4" />
      <div className="flex flex-col space-y-12">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex max-[450px]:flex-col space-x-6 max-[450px]:space-x-0 max-[450px]:space-y-6 items-center max-[450px]:items-stretch"
          >
            <div className="relative rounded-2xl flex-shrink-0 select-none">
              <Skeleton className="w-[398px] h-56 max-xl:w-full max-xl:h-44 max-md:h-32 max-sm:w-full rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
            <div className="w-full max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-80 max-md:h-4 max-sm:h-[14px]" />
                <Skeleton className="h-[18px] w-12 max-md:h-[14px] max-sm:h-3" />
              </div>
              <Skeleton className="h-1 w-full my-2" />
              <Skeleton className="h-[72px] w-full max-md:h-[54px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}