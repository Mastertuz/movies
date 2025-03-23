import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="my-10">
      <div className="flex gap-10 items-center max-sm:items-start max-sm:gap-6 max-sm:flex-col">
        <Skeleton
          className="h-[450px] w-full max-md:h-[400px] max-md:max-w-64 max-sm:mx-auto max-w-80 rounded-3xl flex-shrink-0 "
        />
        <div className="flex-1 space-y-6 max-sm:space-y-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-3/5 max-md:h-7 max-sm:h-5" />
            <Skeleton className="h-7 w-16 max-sm:h-5" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-4 w-20 max-[400px]:hidden" />
            <Skeleton className="h-10 w-36 rounded-md" />
          </div>
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-6 w-24 max-md:h-5" />
          <Skeleton className="h-20 w-full max-lg:h-12 max-md:h-16" />
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-md" />
            ))}
          </div>
        </div>
      </div>

      <div className="my-10">
        <Skeleton className="h-7 w-32 mb-4 max-sm:h-6" />
        <div className="flex gap-4 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2 w-[16.666%] max-lg:w-[20%] max-md:w-[25%] max-[540px]:w-[33.333%]">
              <Skeleton className="h-[300px] max-lg:h-[230px] max-sm:h-[180px] w-full rounded-3xl" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
              <Skeleton className="h-3 w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <Skeleton className="h-7 w-32 mb-4 max-sm:h-6" />
        <Skeleton className="h-[600px] w-full rounded-3xl max-md:h-[400px]" />
      </div>
    </div>
  );
}