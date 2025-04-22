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

      {/* Main Content Skeleton */}
      <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-6">
        {/* Location Title and Badges Skeleton */}
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-8 w-24" />
        </div>

        {/* Badges Skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>

        {/* Image Gallery Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <Skeleton className="w-full h-80 rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="w-full h-36 rounded-lg" />
            <Skeleton className="w-full h-36 rounded-lg" />
            <Skeleton className="w-full h-36 rounded-lg" />
            <Skeleton className="w-full h-36 rounded-lg" />
          </div>
        </div>

        {/* Location Info Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-40 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />

            <div className="space-y-2 mb-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <Skeleton className="h-10 w-48" />
          </div>

          <Skeleton className="h-64 w-full rounded-lg" />
        </div>

        {/* Map Section Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-64 mb-4" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>

        {/* Added By Section Skeleton */}
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div>
              <Skeleton className="h-4 w-32 mb-1" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <Skeleton className="h-8 w-20" />
        </div>

        {/* Special Notes Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-64 mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>

        {/* Environmental Message Skeleton */}
        <div className="rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-8">
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-8 w-3/4" />
            </div>
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
