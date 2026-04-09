export function Skeleton({ className = "h-6 w-full" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-white/20 ${className}`} />;
}
