export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-500/30 border-t-brand-500" />
        <p className="text-sm text-slate-400">Loading...</p>
      </div>
    </div>
  );
}
