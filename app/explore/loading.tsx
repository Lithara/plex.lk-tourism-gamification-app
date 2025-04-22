import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Notification Bar Skeleton */}
      <div className="bg-primary-500 h-10"></div>

      {/* Header Skeleton */}
      <header className="bg-white border-b">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-12 rounded" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>

      {/* Search Bar Skeleton */}
      <div className="bg-white border-b">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="relative max-w-xl mx-auto">
            <Skeleton className="h-10 w-full rounded-full" />
          </div>
        </div>
      </div>

      {/* Filters Skeleton */}
      <div className="bg-white border-b">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24 rounded" />
              <Skeleton className="h-8 w-24 rounded" />
              <Skeleton className="h-8 w-32 rounded" />
            </div>
            <Skeleton className="h-6 w-20 rounded" />
          </div>
        </div>
      </div>

      {/* Categories Skeleton */}
      <div className="bg-white border-b">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-8 w-24 rounded" />
              ))}
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Skeleton className="w-full h-48" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            ))}
        </div>

        {/* Show More Button Skeleton */}
        <div className="flex justify-center mt-8">
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </div>
    </div>
  );
}
