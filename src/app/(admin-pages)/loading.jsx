export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2]">
      <div className="text-center">
        <div className="relative mx-auto h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#4B5696]"></div>
        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-800">
          Loading...
        </h2>

        <p className="mt-2 text-slate-500">
          Fetching dashboard data
        </p>
      </div>
    </div>
  );
}