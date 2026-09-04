
import React from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Search  } from "lucide-react";
import { GetCategoryData } from "@/utils/GetAPI";
import Deletebtn from "../ui/Deletebtn";
import EditBTN from "../ui/editBTN";
import Updatebtn from "../ui/StatusUpdatebtn";
import AddBtn from "../ui/AddBtn";

export default  async function Category() {
 const {categories} =  await GetCategoryData()
const activedata = categories.filter((cat)=>{ return cat.status == true})
const deactivateData = categories.filter((cat)=>{ return cat.status == false})

  return (
  <div className="min-h-screen bg-slate-100 p-6">

  {/* Header */}
  <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        Categories
      </h1>

      <p className="mt-1 text-slate-500">
        Manage your furniture categories.
      </p>
    </div>

    <AddBtn
      href="/admin/category/add-category"
      name="Add Category"
    />
  </div>

  {/* Stats */}
  <div className="mb-8 grid gap-6 md:grid-cols-3">

    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">
        Total Categories
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-800">
        {categories.length}
      </h2>
    </div>

    <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">
        Active Categories
      </p>

      <h2 className="mt-2 text-4xl font-bold text-green-600">
        {activedata.length}
      </h2>
    </div>

    <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">
        Inactive Categories
      </p>

      <h2 className="mt-2 text-4xl font-bold text-red-500">
        {deactivateData.length}
      </h2>
    </div>

  </div>

  {/* Search */}
  <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

    <div className="relative w-full md:max-w-md">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search category..."
        className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500"
      />

    </div>

    <select className="rounded-xl border border-slate-200 px-5 py-3 outline-none transition focus:border-indigo-500">
      <option>All Status</option>
      <option>Active</option>
      <option>Inactive</option>
    </select>

  </div>

  {/* Table */}
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

    <div className="overflow-x-auto">

      <table className="w-full min-w-[900px]">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-8 py-5 text-left text-sm font-semibold text-slate-700">
              #
            </th>

            <th className="px-8 py-5 text-left text-sm font-semibold text-slate-700">
              Image
            </th>

            <th className="px-8 py-5 text-left text-sm font-semibold text-slate-700">
              Category
            </th>

            <th className="px-8 py-5 text-center text-sm font-semibold text-slate-700">
              Status
            </th>

            <th className="px-8 py-5 text-center text-sm font-semibold text-slate-700">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {categories.map((item, index) => (

            <tr
              key={item._id}
              className="border-t border-slate-100 transition hover:bg-slate-50"
            >

              <td className="px-8 py-5 font-medium text-slate-600">
                {index + 1}
              </td>

              <td className="px-8 py-5">
                <img
                  src={item.image || "https://placehold.co/60x60"}
                  alt={item.name}
                  className="h-14 w-14 rounded-xl border border-slate-200 object-cover"
                />
              </td>

              <td className="px-8 py-5">

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.slug}
                  </p>

                </div>

              </td>

              <td className="px-8 py-5 text-center">

                <span
                  className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold ${
                    item.status
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status ? "Active" : "Inactive"}
                </span>

              </td>

              <td className="px-8 py-5">

                <div className="flex justify-center gap-3">

                  <EditBTN
                    path={`/admin/category/edit/${item._id}`}
                  />

                  <Updatebtn
                    path={`${process.env.NEXT_PUBLIC_CATEGORY_URL}/category/update/${item._id}`}
                  />

                  <Deletebtn
                    id={item._id}
                    path={`${process.env.NEXT_PUBLIC_CATEGORY_URL}/category/delete/${item._id}`}
                  />

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

    {/* Footer */}

    <div className="flex flex-col gap-4 border-t border-slate-200 px-8 py-5 md:flex-row md:items-center md:justify-between">

      <p className="text-sm text-slate-500">
        Showing <span className="font-semibold">{categories.length}</span> of{" "}
        <span className="font-semibold">{categories.length}</span> categories
      </p>

      <div className="flex gap-2">

        <button className="rounded-xl border border-slate-200 px-5 py-2 text-sm transition hover:bg-slate-100">
          Previous
        </button>

        <button className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium text-white">
          1
        </button>

        <button className="rounded-xl border border-slate-200 px-5 py-2 text-sm transition hover:bg-slate-100">
          Next
        </button>

      </div>

    </div>

  </div>

</div>
  );
}