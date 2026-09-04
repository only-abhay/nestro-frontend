"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Package,
  ArrowRight,
  Copy,
  Home,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

export default function OrderSuccessContent({ orderId }) {
  const [copied, setCopied] = useState(false);

  const copyOrderId = async () => {
    try {
      await navigator.clipboard.writeText(orderId);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          
          {/* Background Decoration */}
          <div className="absolute -top-28 -right-28 h-56 w-56 rounded-full bg-green-100 blur-3xl opacity-70" />
          <div className="absolute -bottom-28 -left-28 h-56 w-56 rounded-full bg-violet-100 blur-3xl opacity-70" />

          <div className="relative p-8 md:p-12">

            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-14 w-14 text-green-600" />
              </div>
            </div>

            {/* Heading */}
            <div className="mt-8 text-center">
              <h1 className="text-4xl font-bold text-slate-900">
                Order Confirmed 🎉
              </h1>

              <p className="mt-3 text-slate-600 text-lg">
                Thank you for your purchase. Your order has been placed
                successfully.
              </p>
            </div>

            {/* Order Card */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <Package className="h-6 w-6 text-violet-600" />

                <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                  Order ID
                </span>
              </div>

              <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <code className="break-all rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
                  {orderId}
                </code>

                <button
                  onClick={copyOrderId}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <Copy size={18} />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="mt-8 rounded-2xl bg-green-50 border border-green-100 p-5">
              <p className="text-sm leading-7 text-slate-700">
                We've received your order and our team has started processing
                it. You'll receive updates about packing, shipping and delivery
                on your registered email and mobile number.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/profile"
                className="flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-4 text-white font-semibold transition hover:bg-violet-700"
              >
                <ShoppingBag size={20} />
                View My Orders
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                <Home size={20} />
                Continue Shopping
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}