"use client";

import {
  ArrowUpRight,
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹8,45,620",
    growth: "+18.4%",
    icon: DollarSign,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Orders",
    value: "1,284",
    growth: "+12.6%",
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Products",
    value: "248",
    growth: "+8.3%",
    icon: Package,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Customers",
    value: "4,521",
    growth: "+22.5%",
    icon: Users,
    color: "bg-violet-100 text-violet-600",
  },
];

export default function AdminDashboard() {
  return (
<main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8 text-slate-900">

      {/* Welcome */}

<section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-5 sm:p-8">

        <div className="absolute right-0 top-0 h-full w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-white/10 text-white px-4 py-2 text-sm">
              Furniture Admin Dashboard
            </span>

            <h1 className="mt-5 text-2xl sm:text-3xl text-white lg:text-4xl font-bold">
              Welcome back, Admin 👋
            </h1>

            <p className="mt-4 max-w-2xl text-white">
              Manage products, monitor orders, analyze sales and grow your
              furniture business from one powerful dashboard.
            </p>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">
            View Reports
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

      {/* Stats */}

      <section className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h2>

                  <div className="mt-4 flex items-center gap-2">

                    <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-sm font-semibold text-emerald-600">

                      <ArrowUpRight size={14} />

                      {item.growth}

                    </div>

                    <span className="text-sm text-slate-400">
                      this month
                    </span>

                  </div>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={28} />
                </div>

              </div>

            </div>

          );

        })}

      </section>
      {/* Analytics Section */}
<section className="mt-6 grid grid-cols-1 gap-6 2xl:grid-cols-3">

  {/* Sales Analytics */}

  <div className="xl:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

    <div className="flex items-center justify-between">

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Sales Analytics
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monthly revenue overview
        </p>
      </div>

      <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:bg-slate-100">
        This Year
      </button>

    </div>

    {/* Fake Chart */}

<div className="mt-10">

  {/* Chart Top Info */}

  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

    <div>
      <p className="text-sm text-slate-500">
        Total Revenue
      </p>

      <h3 className="text-3xl font-bold text-slate-900">
        ₹8,45,620
      </h3>
    </div>


    <div className="rounded-xl bg-emerald-50 px-4 py-3">

      <p className="text-sm text-slate-500">
        Growth
      </p>

      <p className="font-bold text-emerald-600">
        +18.4%
      </p>

    </div>

  </div>


  {/* Chart */}

  <div className="relative flex h-64 sm:h-80 items-end gap-3 rounded-2xl bg-slate-50 p-5">


    {/* Horizontal Lines */}

    <div className="absolute inset-5 flex flex-col justify-between pointer-events-none">

      <span className="border-t border-dashed border-slate-200" />

      <span className="border-t border-dashed border-slate-200" />

      <span className="border-t border-dashed border-slate-200" />

      <span className="border-t border-dashed border-slate-200" />

    </div>


    {[
      {
        month:"Jan",
        value:45
      },
      {
        month:"Feb",
        value:65
      },
      {
        month:"Mar",
        value:58
      },
      {
        month:"Apr",
        value:85
      },
      {
        month:"May",
        value:72
      },
      {
        month:"Jun",
        value:95
      },
      {
        month:"Jul",
        value:80
      },
      {
        month:"Aug",
        value:110
      },
      {
        month:"Sep",
        value:92
      },
      {
        month:"Oct",
        value:125
      },
      {
        month:"Nov",
        value:108
      },
      {
        month:"Dec",
        value:145
      },

    ].map((item)=>(
      
      <div
        key={item.month}
        className="group relative z-10 flex h-full flex-1 flex-col items-center justify-end"
      >

        {/* Tooltip */}

        <div className="absolute -top-10 hidden rounded-lg bg-slate-900 px-3 py-1 text-xs text-white group-hover:block">

          ₹{item.value}K

        </div>


        {/* Bar */}

        <div
          style={{
            height:`${item.value}px`
          }}

          className="
          w-full
          rounded-t-xl
          bg-gradient-to-t
          from-blue-600
          to-cyan-400
          transition-all
          duration-300
          group-hover:scale-105
          "
        />


        {/* Month */}

        <span className="mt-3 text-xs text-slate-400">
          {item.month}
        </span>


      </div>

    ))}


  </div>


</div>

  </div>

  {/* Revenue Overview */}

  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

    <h2 className="text-xl font-bold text-slate-900">
      Revenue Overview
    </h2>

    <div className="mt-8 flex justify-center">

      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[18px] border-blue-500">

        <div className="text-center">

          <h3 className="text-3xl font-bold text-slate-900">
            82%
          </h3>

          <p className="text-sm text-slate-500">
            Target
          </p>

        </div>

      </div>

    </div>

    <div className="mt-10 space-y-5">

      <div>

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-slate-500">Revenue</span>

          <span className="font-semibold">₹8.4L</span>

        </div>

        <div className="h-2 rounded-full bg-slate-200">

          <div className="h-2 w-[82%] rounded-full bg-blue-600" />

        </div>

      </div>

      <div>

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-slate-500">
            Profit
          </span>

          <span className="font-semibold">
            ₹2.1L
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-200">

          <div className="h-2 w-[60%] rounded-full bg-emerald-500" />

        </div>

      </div>

      <div>

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-slate-500">
            Expenses
          </span>

          <span className="font-semibold">
            ₹96K
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-200">

          <div className="h-2 w-[35%] rounded-full bg-red-500" />

        </div>

      </div>

    </div>

  </div>

</section>

{/* Best Selling Products */}

<section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-xl font-bold text-slate-900">
        Best Selling Furniture
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Top performing products this month
      </p>

    </div>

    <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm transition hover:bg-slate-100">
      View All
    </button>

  </div>

  <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

    {[
      {
        name: "Modern Sofa",
        sold: "325 Sold",
        price: "₹24,999",
      },
      {
        name: "Luxury Chair",
        sold: "287 Sold",
        price: "₹12,499",
      },
      {
        name: "Dining Table",
        sold: "243 Sold",
        price: "₹31,999",
      },
      {
        name: "Wooden Cabinet",
        sold: "182 Sold",
        price: "₹18,999",
      },
    ].map((item) => (

      <div
        key={item.name}
        className="rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
<div className="flex h-36 sm:h-40 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">

          Furniture Image

        </div>

        <h3 className="mt-5 text-lg font-semibold text-slate-900">
          {item.name}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {item.sold}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-lg font-bold text-blue-600">
            {item.price}
          </span>

          <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white transition hover:bg-blue-600">
            Details
          </button>

        </div>

      </div>

    ))}

  </div>

</section>
{/* Bottom Section */}
<section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">

  {/* Recent Orders */}

  <div className=" rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

    <div className="mb-6 flex items-center justify-between">

      <div>

        <h2 className="text-xl font-bold text-slate-900">
          Recent Orders
        </h2>

        <p className="text-sm text-slate-500">
          Latest customer purchases
        </p>

      </div>

      <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-100 transition">
        View All
      </button>

    </div>

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b border-slate-200 text-left text-sm text-slate-500">

            <th className="pb-4">Order</th>
            <th className="pb-4">Customer</th>
            <th className="pb-4">Amount</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Date</th>

          </tr>

        </thead>

        <tbody>

          {[
            {
              id: "#ORD-1201",
              customer: "John Smith",
              amount: "₹24,999",
              status: "Delivered",
              color: "bg-green-100 text-green-700",
              date: "17 Jul",
            },
            {
              id: "#ORD-1202",
              customer: "Emma Watson",
              amount: "₹12,400",
              status: "Pending",
              color: "bg-yellow-100 text-yellow-700",
              date: "16 Jul",
            },
          ].map((order) => (

            <tr
              key={order.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition"
            >

              <td className="py-5 font-semibold">
                {order.id}
              </td>

              <td>{order.customer}</td>

              <td className="font-medium">
                {order.amount}
              </td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${order.color}`}
                >
                  {order.status}
                </span>

              </td>

              <td className="text-slate-500">
                {order.date}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

  {/* Right Side */}

<div className="space-y-6">

    {/* Quick Actions */}

    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Quick Actions
      </h2>

      <div className="mt-6 space-y-4">

        {[
          "Add Product",
          "Create Category",
          "View Orders",
          "Manage Customers",
        ].map((item) => (

          <button
            key={item}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 font-medium transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >
            {item}
          </button>

        ))}

      </div>

    </div>



  </div>
    {/* Latest Activity */}

  
    <div  className="rounded-3xl   border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Latest Activity
      </h2>

      <div className="mt-6 space-y-5">

        {[
          "New order placed by John",
          "Luxury Sofa added",
          "Customer Emma registered",
          "Order #1204 cancelled",
          "New review received",
        ].map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-blue-600" />

            <div>

              <p className="font-medium text-slate-700">
                {item}
              </p>

              <span className="text-sm text-slate-400">
                2 hours ago
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

</section>

    </main>
  );
}