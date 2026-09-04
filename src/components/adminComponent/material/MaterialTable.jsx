import React from "react";
import { Search } from "lucide-react";
import { GetMaterial } from "@/utils/GetAPI";
import Deletebtn from "../ui/Deletebtn";
import EditBTN from "../ui/editBTN";
import Updatebtn from "../ui/StatusUpdatebtn";
import AddBtn from "../ui/AddBtn";

export default async function MaterialTable() {
  const { material } = await GetMaterial();

  const activeData = material.filter((item) => item.status === true);
  const inactiveData = material.filter((item) => item.status === false);

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Material Types
          </h1>
          <p className="mt-1 text-slate-500">
            Manage all available materials.
          </p>
        </div>

        <AddBtn
          href="/admin/material/add-material"
          name="Add Material"
        />
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total</p>
          <h2 className="mt-2 text-4xl font-bold">
            {material.length}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-green-100">
          <p className="text-sm text-slate-500">Active</p>
          <h2 className="mt-2 text-4xl font-bold text-green-600">
            {activeData.length}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-red-100">
          <p className="text-sm text-slate-500">Inactive</p>
          <h2 className="mt-2 text-4xl font-bold text-red-500">
            {inactiveData.length}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search material..."
            className="w-full rounded-xl border px-4 py-3 pl-11 outline-none focus:border-indigo-500"
          />
        </div>

        <select className="rounded-xl border px-5 py-3 outline-none focus:border-indigo-500">
          <option value="">All Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-8 py-5 text-left">#</th>
                <th className="px-8 py-5 text-left">Material Name</th>
                <th className="px-8 py-5 text-left">Slug</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {material.map((item, index) => (
                <tr key={item._id} className="border-t hover:bg-slate-50">

                  <td className="px-8 py-5">
                    {index + 1}
                  </td>

                  <td className="px-8 py-5 font-semibold text-slate-800">
                    {item.name}
                  </td>

                  <td className="px-8 py-5 text-slate-500">
                    {item.slug}
                  </td>

                  <td className="px-8 py-5 text-center">
                    <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                      item.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {item.status ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-8 py-5">
                    <div className="flex justify-center gap-3">

                      <EditBTN path={`/admin/material/edit/${item._id}`} />

                      <Updatebtn
                        path={`${process.env.NEXT_PUBLIC_CATEGORY_URL}/material/update/${item._id}`}
                      />

                      <Deletebtn
                        id={item._id}
                        path={`${process.env.NEXT_PUBLIC_CATEGORY_URL}/material/delete/${item._id}`}
                      />

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}