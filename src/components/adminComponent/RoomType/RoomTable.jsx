
import React from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Search  } from "lucide-react";
import { GetRoomData } from "@/utils/GetAPI";
import Deletebtn from "../ui/Deletebtn";
import EditBTN from "../ui/editBTN";
import Updatebtn from "../ui/StatusUpdatebtn";
import AddBtn from "../ui/AddBtn";

export default  async function RoomTable() {
 const {Room} =  await GetRoomData()

const activedata = Room.filter((cat)=>{ return cat.status == true})
const deactivateData = Room.filter((cat)=>{ return cat.status == false})

  return (
  <div className="min-h-screen bg-slate-100 p-6">
  {/* Header */}
  <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        Room Types
      </h1>

      <p className="mt-1 text-slate-500">
        Manage all available room types.
      </p>
    </div>

    <AddBtn
      href="/admin/room-type/add-room"
      name="Add Room"
    />
  </div>

  {/* Stats */}
  <div className="mb-8 grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
      <p className="text-sm text-slate-500">
        Total Rooms
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-800">
        {Room.length}
      </h2>
    </div>

    <div className="rounded-3xl bg-white p-6 shadow-sm border border-green-100">
      <p className="text-sm text-slate-500">
        Active
      </p>

      <h2 className="mt-2 text-4xl font-bold text-green-600">
        {activedata.length}
      </h2>
    </div>

    <div className="rounded-3xl bg-white p-6 shadow-sm border border-red-100">
      <p className="text-sm text-slate-500">
        Inactive
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
        placeholder="Search room type..."
        className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
      />
    </div>

    <select className="rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-indigo-500">
      <option>All Status</option>
      <option>Active</option>
      <option>Inactive</option>
    </select>

  </div>

  {/* Table */}
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-8 py-5 text-left text-sm font-semibold text-slate-700">
              #
            </th>

            <th className="px-8 py-5 text-left text-sm font-semibold text-slate-700">
              Room Type
            </th>

            <th className="px-8 py-5 text-left text-sm font-semibold text-slate-700">
              Slug
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

          {Room.map((item, index) => (

            <tr
              key={item._id}
              className="border-t border-slate-100 hover:bg-slate-50 transition"
            >

              <td className="px-8 py-5 font-medium text-slate-600">
                {index + 1}
              </td>

              <td className="px-8 py-5">

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {item.name}
                  </h3>

                </div>

              </td>

              <td className="px-8 py-5 text-slate-500">
                {item.slug}
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
                    path={`/admin/room-type/edit/${item._id}`}
                  />

                  <Updatebtn
                    path={`${process.env.NEXT_PUBLIC_CATEGORY_URL}/room-type/update/${item._id}`}
                  />

                  <Deletebtn
                    id={item._id}
                    path={`${process.env.NEXT_PUBLIC_CATEGORY_URL}/room-type/delete/${item._id}`}
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
        Showing <span className="font-semibold">{Room.length}</span> room
        types
      </p>

      <div className="flex gap-2">

        <button className="rounded-xl border border-slate-200 px-5 py-2 text-sm hover:bg-slate-100">
          Previous
        </button>

        <button className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium text-white">
          1
        </button>

        <button className="rounded-xl border border-slate-200 px-5 py-2 text-sm hover:bg-slate-100">
          Next
        </button>

      </div>

    </div>

  </div>
</div>
  );
}