"use client";

import { useState } from "react";
import EditBTN from "./editBTN";
import Deletebtn from "./Deletebtn";
import Updatebtn from "./StatusUpdatebtn";
import FeatureToggle from "./ProductToggle"
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";

export default function ProductRow({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MAIN ROW */}
      <tr className="border-t">

        <td className="p-4">{index + 1}</td>

       <td className="p-5">
  <div className="flex items-start gap-4">

    {/* Thumbnail */}
    <img
  src={item?.thumbnail ? item?.thumbnail : "/placeholder.png"}
      alt={item?.name}
      className="h-16 w-16 rounded-2xl border border-slate-200 object-cover"
    />

  <div className="flex-1">

  <h3 className="font-semibold text-slate-800">
    {item?.name}
  </h3>

  <p className="text-sm text-slate-500">
    {item?.color} • {item?.MaterialID?.name}
  </p>

  {/* Price */}
  <div className="mt-2 flex items-center gap-2">
    <span className="text-lg font-bold text-[#4B5696]">
      ₹{item?.salePrice}
    </span>

    <span className="line-through text-slate-400">
      ₹{item?.originalPrice}
    </span>
  </div>

  {/* Toggle Buttons */}
  <div className="mt-3 flex flex-wrap gap-2">

  <FeatureToggle
  flag="stock"
  value={item?.stock}
   id = {item?._id}
/>

<FeatureToggle
  flag="featured"
  value={item?.featured}
     id = {item?._id}

/>

<FeatureToggle
  flag="bestSeller"
  value={item?.bestSeller}
     id = {item?._id}

/>

<FeatureToggle
  flag="newArrival"
  value={item?.newArrival}
     id = {item?._id}

/>
  <Link href={`/admin/product/add-image/${item?._id}`} >
  <IoMdAdd />
  </Link>

  </div>

</div>

  </div>
</td>

        <td className="p-4 text-slate-500">{item?.slug}</td>

        <td className="p-4 text-center">
          <span className={`px-3 py-1 rounded-full text-xs ${
            item?.status
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}>
            {item?.status ? "Active" : "Inactive"}
          </span>
        </td>

        <td className="p-4">
          <div className="flex justify-center gap-2">

            <EditBTN path={`/admin/product/edit/${item?._id}`} />

            <Updatebtn
              path={`${process.env.NEXT_PUBLIC_CATEGORY_URL}/product/update/${item?._id}`}
            />

            <Deletebtn
              id={item?._id}
              path={`${process.env.NEXT_PUBLIC_CATEGORY_URL}/product/delete/${item?._id}`}
            />

            <button
              onClick={() => setOpen(!open)}
              className="px-3 py-1 text-xs bg-slate-200 rounded"
            >
              {open ? "Hide" : "Show More"}
            </button>

          </div>
        </td>

      </tr>

      {/* EXPAND ROW */}
   {open && (
  <tr className="bg-slate-50">
    <td colSpan={5} className="p-6">

      <div className="rounded-3xl border border-slate-200 bg-white p-6">

        <h3 className="mb-6 text-lg font-semibold text-slate-800">
          Product Details
        </h3>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Category
            </p>

            <p className="mt-2 font-semibold text-slate-800">
              {item?.categroyID?.name || "N/A"}
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Room Type
            </p>

            <p className="mt-2 font-semibold text-slate-800">
              {item?.roomID?.name || "N/A"}
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Material
            </p>

            <p className="mt-2 font-semibold text-slate-800">
              {item?.MaterialID?.name || "N/A"}
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Sale Price
            </p>

            <p className="mt-2 text-lg font-bold text-[#4B5696]">
              ₹ {item?.salePrice}
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">

          <div className="rounded-2xl border p-5">
            <h4 className="mb-3 font-semibold text-slate-800">
              Description
            </h4>

            <p className="text-sm leading-7 text-slate-600">
              {item?.description || "No description available."}
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h4 className="mb-3 font-semibold text-slate-800">
              Short Description
            </h4>

            <p className="text-sm leading-7 text-slate-600">
              {item?.sortdescription || "No short description."}
            </p>
          </div>

        </div>

        {/* Images */}
        <div className="mt-8">

          <h4 className="mb-4 font-semibold text-slate-800">
            Product Images
          </h4>

          <div className="flex flex-wrap gap-4">

            {item?.thumbnail && (
              <div>
                <p className="mb-2 text-xs text-slate-500">
                  Thumbnail
                </p>

                <img
                  src={item?.thumbnail}
                  className="h-28 w-28 rounded-2xl border object-cover"
                  alt="Thumbnail"
                />
              </div>
            )}

            {item?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                className="h-28 w-28 rounded-2xl border object-cover"
                alt="Gallery"
              />
            ))} 

          </div>

        </div>

      </div>

    </td>
  </tr>
)}
    </>
  );
}