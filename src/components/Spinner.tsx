export default function Spinner({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg className="animate-spin text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  );
}

export function SkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100">
          <div className="aspect-square shimmer" />
          <div className="p-3 space-y-2">
            <div className="h-3 w-16 shimmer rounded" />
            <div className="h-4 w-full shimmer rounded" />
            <div className="h-4 w-20 shimmer rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
