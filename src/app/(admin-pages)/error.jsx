"use client";

import { RefreshCcw } from "lucide-react";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2] px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <span className="text-4xl">⚠️</span>
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-800">
          Something Went Wrong
        </h1>

        <p className="mt-3 text-slate-500">
          An unexpected error occurred while loading this page.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#4B5696] px-6 py-3 font-medium text-white transition hover:bg-[#404a83]"
        >
          <RefreshCcw size={18} />
          Try Again
        </button>
      </div>
    </div>
  );
}