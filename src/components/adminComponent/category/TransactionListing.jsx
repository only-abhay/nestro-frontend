"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  IndianRupee,
  Clock,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import { GetTransactions } from "@/utils/GetAPI";
import { useRouter, useSearchParams } from "next/navigation";

export default function TransactionListing() {
  const [transactions, setTransactions] = useState([]);

  const router = useRouter();
  const searchParams = useSearchParams();

  const activeQuery = searchParams.get("query") || "";

  const [query, setQuery] = useState(activeQuery);

  // Search Handler

  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());

    if (query.trim()) {
      params.set("query", query.trim());
    } else {
      params.delete("query");
    }

    router.push(`/admin/transactions?${params.toString()}`, {
      scroll: false,
    });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  // Fetch Transactions

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await GetTransactions({
          activeQuery,
        });
        console.log(response);
        setTransactions(response?.Transactions || []);
      } catch (error) {
        console.log("Transaction Fetch Error:", error);
      }
    };

    fetchTransactions();
  }, [activeQuery]);

  const pendingTransactions = transactions.filter((item) => item.status !== 1);

  const completedTransactions = transactions.filter(
    (item) => item.status === 1,
  );

  const revenue = completedTransactions.reduce(
    (sum, item) => sum + item.amount,
    0,
  );

  return (
    <div className="min-h-screen bg-slate-100 p-3 sm:p-6">
      {/* Header */}

      <div
        className="
        mb-6 sm:mb-8
        flex flex-col gap-3
        sm:gap-5
        md:flex-row
        md:items-center
        md:justify-between
      "
      >
        <div>
          <h1
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-slate-800
          "
          >
            Transactions
          </h1>

          <p
            className="
            mt-1
            text-sm
            sm:text-base
            text-slate-500
          "
          >
            Track and manage all payment transactions.
          </p>
        </div>
      </div>

      {/* Stats Cards */}

      <div
        className="
        mb-6 sm:mb-8
        grid grid-cols-3
        gap-2 sm:gap-6
      "
      >
        {/* Revenue */}

        <div
          className="
          rounded-2xl sm:rounded-3xl
          border border-slate-200
          bg-white
          p-3 sm:p-6
          shadow-sm
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <p
              className="
              truncate
              text-xs
              sm:text-sm
              text-slate-500
            "
            >
              Revenue
            </p>

            <IndianRupee
              size={16}
              className="
                hidden sm:block
                text-slate-400
              "
            />
          </div>

          <h2
            className="
            mt-1 sm:mt-2
            text-lg sm:text-3xl
            font-bold
            text-slate-800
          "
          >
            ₹{revenue.toLocaleString("en-IN")}
          </h2>
        </div>

        {/* Pending */}

        <div
          className="
          rounded-2xl sm:rounded-3xl
          border border-amber-100
          bg-white
          p-3 sm:p-6
          shadow-sm
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <p
              className="
              truncate
              text-xs
              sm:text-sm
              text-slate-500
            "
            >
              Pending
            </p>

            <Clock
              size={16}
              className="
                hidden sm:block
                text-amber-400
              "
            />
          </div>

          <h2
            className="
            mt-1 sm:mt-2
            text-xl sm:text-4xl
            font-bold
            text-amber-600
          "
          >
            {pendingTransactions.length}
          </h2>
        </div>

        {/* Completed */}

        <div
          className="
          rounded-2xl sm:rounded-3xl
          border border-green-100
          bg-white
          p-3 sm:p-6
          shadow-sm
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <p
              className="
              truncate
              text-xs
              sm:text-sm
              text-slate-500
            "
            >
              Completed
            </p>

            <CheckCircle2
              size={16}
              className="
                hidden sm:block
                text-green-400
              "
            />
          </div>

          <h2
            className="
            mt-1 sm:mt-2
            text-xl sm:text-4xl
            font-bold
            text-green-600
          "
          >
            {completedTransactions.length}
          </h2>
        </div>
      </div>
      {/* Search */}

      <div
        className="
        mb-6 sm:mb-8
        flex flex-col gap-4
        rounded-2xl sm:rounded-3xl
        border border-slate-200
        bg-white
        p-3 sm:p-5
        shadow-sm
        md:flex-row
        md:items-center
        md:justify-between
      "
      >
        <div
          className="
          relative
          w-full
          md:max-w-md
        "
        >
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search transaction ID, order ID, name, email..."
            className="
              w-full
              rounded-xl
              border border-slate-200
              py-2.5 sm:py-3
              pl-11 pr-4
              text-sm sm:text-base
              outline-none
              transition
              focus:border-indigo-500
            "
          />
        </div>

        <button
          onClick={handleSearch}
          className="
            rounded-xl
            bg-indigo-600
            px-6
            py-2.5 sm:py-3
            text-sm
            font-medium
            text-white
            transition
            hover:bg-indigo-700
          "
        >
          Search
        </button>
      </div>

      {/* Table */}

      <div
        className="
        overflow-hidden
        rounded-2xl sm:rounded-3xl
        border border-slate-200
        bg-white
        shadow-sm
      "
      >
        <div className="overflow-x-auto">
          <table
            className="
            w-full
            min-w-[900px]
          "
          >
            <thead className="bg-slate-50">
              <tr>
                <th
                  className="
                  px-8 py-5
                  text-left
                  text-sm
                  font-semibold
                  text-slate-700
                "
                >
                  Transaction
                </th>

                <th
                  className="
                  px-8 py-5
                  text-left
                  text-sm
                  font-semibold
                  text-slate-700
                "
                >
                  Order
                </th>

                <th
                  className="
                  px-8 py-5
                  text-left
                  text-sm
                  font-semibold
                  text-slate-700
                "
                >
                  Customer
                </th>

                <th
                  className="
                  px-8 py-5
                  text-right
                  text-sm
                  font-semibold
                  text-slate-700
                "
                >
                  Amount
                </th>

                <th
                  className="
                  px-8 py-5
                  text-center
                  text-sm
                  font-semibold
                  text-slate-700
                "
                >
                  Mode
                </th>

                <th
                  className="
                  px-8 py-5
                  text-center
                  text-sm
                  font-semibold
                  text-slate-700
                "
                >
                  Status
                </th>

                <th
                  className="
                  px-8 py-5
                  text-left
                  text-sm
                  font-semibold
                  text-slate-700
                "
                >
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="
                        py-16
                        text-center
                        text-slate-400
                      "
                  >
                    No transactions found.
                  </td>
                </tr>
              )}

              {transactions.map((txn) => (
                <tr
                  key={txn._id}
                  className="
                      border-t
                      border-slate-100
                      transition
                      hover:bg-slate-50
                    "
                >
                  {/* Transaction ID */}

                  <td className="px-8 py-5">
                    <p
                      className="
                        font-mono
                        text-sm
                        font-medium
                        text-slate-700
                      "
                    >
                      {txn.transactionId}
                    </p>
                  </td>

                  {/* Order ID */}

                  <td className="px-8 py-5">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1
                        font-mono
                        text-sm
                        font-medium
                        text-indigo-600
                      "
                    >
                      #
                      {txn.orderId?._id
                        ? txn.orderId._id.slice(-8).toUpperCase()
                        : txn.orderId
                          ? txn.orderId.slice(-8).toUpperCase()
                          : "N/A"}
                      <ExternalLink size={13} />
                    </span>
                  </td>

                  {/* Customer */}

                  <td className="px-8 py-5">
                    <h3
                      className="
                        font-semibold
                        text-slate-800
                      "
                    >
                      {txn.userId?.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-500
                      "
                    >
                      {txn.userId?.email}
                    </p>
                  </td>

                  {/* Amount */}

                  <td
                    className="
                      px-8
                      py-5
                      text-right
                      font-semibold
                      text-slate-800
                    "
                  >
                    ₹{txn.amount.toLocaleString("en-IN")}
                  </td>

                  {/* Payment Mode */}

                  <td
                    className="
                      px-8
                      py-5
                      text-center
                    "
                  >
                    <span
                      className={`
                          inline-flex
                          rounded-full
                          px-3
                          py-1.5
                          text-xs
                          font-semibold

                          ${txn.paymentMode === 0
                          ? "bg-slate-100 text-slate-600"
                          : "bg-indigo-100 text-indigo-700"
                        }
                        `}
                    >
                      {txn.paymentMode === 0 ? "COD" : "Prepaid"}
                    </span>
                  </td>

                  {/* Status */}

                  <td
                    className="
                      px-8
                      py-5
                      text-center
                    "
                  >
                    <span
                      className={`
                          inline-flex
                          rounded-full
                          px-3
                          py-1.5
                          text-xs
                          font-semibold

                          ${txn.status === 1
                          ? "bg-green-100 text-green-700"
                          : txn.status === 2
                            ? "bg-red-100 text-red-700"
                            : txn.status === 3
                              ? "bg-gray-200 text-gray-700"
                              : "bg-amber-100 text-amber-700"
                        }
                        `}
                    >
                      {txn.status === 1
                        ? "Completed"
                        : txn.status === 2
                          ? "Failed"
                          : txn.status === 3
                            ? "Refunded"
                            : "Pending"}
                    </span>
                  </td>

                  {/* Date */}

                  <td
                    className="
                      px-8
                      py-5
                      text-sm
                      text-slate-500
                    "
                  >
                    {new Date(txn.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}

        <div
          className="
          flex
          flex-col
          gap-4
          border-t
          border-slate-200
          px-8
          py-5
          md:flex-row
          md:items-center
          md:justify-between
        "
        >
          <p
            className="
            text-sm
            text-slate-500
          "
          >
            Showing <span className="font-semibold">{transactions.length}</span>{" "}
            transactions
          </p>
        </div>
      </div>
    </div>
  );
}
