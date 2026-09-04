"use client";

import React, { useState, useEffect } from "react";
import { Search, Eye, Package, Clock, CheckCircle2 } from "lucide-react";
import { GetOrders } from "@/utils/GetAPI";
import { useRouter, useSearchParams } from "next/navigation";

// ---- Page -----------------------------------------------------------------

export default function OrderListing() {
  const [order, setOrder] = useState([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  // value the API was last actually called with (read from the URL)
  const activeQuery = searchParams.get("query") || "";

  // what the user is currently typing in the box
  const [query, setQuery] = useState(activeQuery);

  // called by the Search button (and Enter key)
  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());

    if (query.trim()) {
      params.set("query", query.trim());
    } else {
      params.delete("query");
    }

    router.push(`/admin/orders?${params.toString()}`, { scroll: false });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await GetOrders({activeQuery });
        setOrder(response.Orders);
        console.log(response.Orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [activeQuery]); // re-fetch only when the URL's query param actually changes (i.e. after Search is clicked)

  const filtered = order; // ab yahi filtered hai, seedha

  // order_status === 6 means "Delivered" (fulfilled). Anything before that
  // (0-5) is still pending / in progress.
  const pendingOrders = order.filter((order) => order.order_status < 6);
  const fulfilledOrders = order.filter(
    (order) => order.order_status === 6
  );

  return (
    <div className="min-h-screen bg-slate-100 p-3 sm:p-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8 flex flex-col gap-3 sm:gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Orders
          </h1>
          <p className="mt-1 text-sm sm:text-base text-slate-500">
            Track and manage every order placed on your store.
          </p>
        </div>
      </div>

      {/* Stats — always one line, even on mobile */}
      <div className="mb-6 sm:mb-8 grid grid-cols-3 gap-2 sm:gap-6">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-3 sm:p-6 shadow-sm min-w-0">
          <div className="flex items-center justify-between">
            <p className="truncate text-xs sm:text-sm text-slate-500">
              Total Orders
            </p>
            <Package size={16} className="hidden sm:block shrink-0 text-slate-400" />
          </div>
          <h2 className="mt-1 sm:mt-2 text-xl sm:text-4xl font-bold text-slate-800">
            {order.length}
          </h2>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-amber-100 bg-white p-3 sm:p-6 shadow-sm min-w-0">
          <div className="flex items-center justify-between">
            <p className="truncate text-xs sm:text-sm text-slate-500">
              Pending
            </p>
            <Clock size={16} className="hidden sm:block shrink-0 text-amber-400" />
          </div>
          <h2 className="mt-1 sm:mt-2 text-xl sm:text-4xl font-bold text-amber-600">
            {pendingOrders.length}
          </h2>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-green-100 bg-white p-3 sm:p-6 shadow-sm min-w-0">
          <div className="flex items-center justify-between">
            <p className="truncate text-xs sm:text-sm text-slate-500">
              Fulfilled
            </p>
            <CheckCircle2 size={16} className="hidden sm:block shrink-0 text-green-400" />
          </div>
          <h2 className="mt-1 sm:mt-2 text-xl sm:text-4xl font-bold text-green-600">
            {fulfilledOrders.length}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 sm:mb-8 flex flex-col gap-4 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-3 sm:p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search by order ID, name, email or phone..."
            className="w-full rounded-xl border border-slate-200 py-2.5 sm:py-3 pl-11 pr-4 text-sm sm:text-base outline-none transition focus:border-indigo-500"
          />
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="rounded-xl bg-indigo-600 px-6 py-2.5 sm:py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Search
        </button>
      </div>

      {/* Table — horizontal scroll on small screens keeps every column readable */}
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 sm:px-8 py-4 sm:py-5 text-left text-sm font-semibold text-slate-700">
                  Order
                </th>
                <th className="px-4 sm:px-8 py-4 sm:py-5 text-left text-sm font-semibold text-slate-700">
                  Customer
                </th>
                <th className="px-4 sm:px-8 py-4 sm:py-5 text-left text-sm font-semibold text-slate-700">
                  Items
                </th>
                <th className="px-4 sm:px-8 py-4 sm:py-5 text-right text-sm font-semibold text-slate-700">
                  Amount
                </th>
                <th className="px-4 sm:px-8 py-4 sm:py-5 text-center text-sm font-semibold text-slate-700">
                  Payment
                </th>
                <th className="px-4 sm:px-8 py-4 sm:py-5 text-center text-sm font-semibold text-slate-700">
                  Order Status
                </th>
                <th className="px-4 sm:px-8 py-4 sm:py-5 text-left text-sm font-semibold text-slate-700">
                  Date
                </th>
                <th className="px-4 sm:px-8 py-4 sm:py-5 text-center text-sm font-semibold text-slate-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-4 sm:px-8 py-12 sm:py-16 text-center text-slate-400"
                  >
                    No orders match your search.
                  </td>
                </tr>
              )}

              {filtered.map((order) => {
                const itemCount = order.product_detail.length;
                const firstItem = order.product_detail[0];

                return (
                  <tr
                    key={order._id}
                    className="border-t border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-4 sm:px-8 py-4 sm:py-5 font-mono text-sm font-medium text-slate-700">
                      #{order._id.slice(-8).toUpperCase()}
                    </td>

                    <td className="px-4 sm:px-8 py-4 sm:py-5">
                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {order.address.fullName}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {order.address.phone} · {order.userId.email}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 sm:px-8 py-4 sm:py-5">
                      <p className="text-sm text-slate-700">
                        {firstItem.name}
                        {itemCount > 1 ? (
                          <span className="text-slate-400">
                            {" "}
                            +{itemCount - 1} more
                          </span>
                        ) : null}
                      </p>
                    </td>

                    <td className="px-4 sm:px-8 py-4 sm:py-5 text-right font-semibold text-slate-800">
                      ₹{order.total_amount.toLocaleString("en-IN")}
                    </td>

                    <td className="px-4 sm:px-8 py-4 sm:py-5">
                      <div className="flex flex-col items-center gap-1.5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                            order.payment_mode === 0
                              ? "bg-slate-100 text-slate-600"
                              : "bg-indigo-100 text-indigo-700"
                          }`}
                        >
                          {order.payment_mode === 0 ? "COD" : "Prepaid"}
                        </span>

                        <span
                          className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                            order.payment_status === 0
                              ? "bg-amber-100 text-amber-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {order.payment_status === 0 ? "Pending" : "Paid"}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 sm:px-8 py-4 sm:py-5 text-center">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                          order.order_status === 6
                            ? "bg-green-100 text-green-700"
                            : order.order_status >= 7
                            ? "bg-red-100 text-red-700"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {order.order_status === 0
                          ? "Placed"
                          : order.order_status === 6
                          ? "Delivered"
                          : order.order_status >= 7
                          ? "Returned"
                          : "In Progress"}
                      </span>
                    </td>

                    <td className="px-4 sm:px-8 py-4 sm:py-5 text-sm text-slate-500">
                      {new Date(order.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    <td className="px-4 sm:px-8 py-4 sm:py-5">
                      <div className="flex justify-center gap-3">
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                          title="View order"
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4 border-t border-slate-200 px-4 sm:px-8 py-4 sm:py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold">{filtered.length}</span>{" "}
            of <span className="font-semibold">{order.length}</span>{" "}
            orders
          </p>

          <div className="flex gap-2">
            <button className="rounded-xl border border-slate-200 px-4 sm:px-5 py-2 text-sm transition hover:bg-slate-100">
              Previous
            </button>
            <button className="rounded-xl bg-indigo-600 px-4 sm:px-5 py-2 text-sm font-medium text-white">
              1
            </button>
            <button className="rounded-xl border border-slate-200 px-4 sm:px-5 py-2 text-sm transition hover:bg-slate-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
