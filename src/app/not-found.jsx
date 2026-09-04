import Link from "next/link";
import { Home } from "lucide-react";
import "./globals.css";


export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2] px-4">
      <div className="text-center">
        <h1 className="text-[140px] font-black leading-none text-[#4B5696]">
          404
        </h1>

        <h2 className="mt-2 text-4xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-slate-500">
          The page you are looking for doesn't exist or may have been moved.to blahhhh
        </p>

        <Link
          href="/admin/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#4B5696] px-6 py-3 font-medium text-white transition hover:bg-[#404a83]"
        >
          <Home size={18} />
          Back To Dashboard
        </Link>
      </div>
    </div>
  );
}