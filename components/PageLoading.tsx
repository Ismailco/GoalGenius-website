export default function PageLoading() {
  return (
    <div className="min-h-[60vh] bg-[#f7faff] px-4 py-16">
      <div className="site-container">
        <div className="site-card mx-auto max-w-3xl p-8">
          <div className="h-7 w-2/3 animate-pulse rounded bg-slate-200" />
          <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-slate-100" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 animate-pulse rounded-xl bg-slate-100" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
