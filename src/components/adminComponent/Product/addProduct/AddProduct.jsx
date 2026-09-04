"use client";

import { useState , useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";
import axiosCat from "@/utils/helper";
import { useRouter } from "next/navigation";
import { GetCategoryData, GetMaterial, GetRoomData } from "@/utils/GetAPI";

import { Editor } from 'primereact/editor';
        


export default function AddProduct() {
  const router = useRouter();

  const[category,setCategory]= useState([])
  const[roooms,setRooms]= useState([])
  const[material,setMaterial]= useState([])
  const [loading, setLoading] = useState(false);


const [formData, setFormData] = useState({
  roomID: "",
  categroyID: "",
  MaterialID: "",

  name: "",
  slug: "",

  originalPrice: "",
  salePrice: "",

  color: "",
  weight: "",

  width: "",
  height: "",
  depth: "",

  description: "",
  sortdescription: "",

  thumbnail: null,
  images: [],
});


  useEffect(
    ()=>{
  const GetData = async ()=>{
    const response = await Promise.all([GetCategoryData(),GetMaterial(),GetRoomData()])
   
    setCategory(response[0].categories)
    setMaterial(response[1].material)
    setRooms(response[2].Room)
  }
  GetData()
    },

    [],
  )
  const fileInputRef = useRef(null);

  const handleNameChange = (e) => {
  const value = e.target.value;

  setFormData((prev) => ({
    ...prev,
    name: value,
    slug: value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-"),
  }));
};

const handleEditorChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    description: e.htmlValue,
  }));
};
 const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleThumbnail = (e) => {
  const file = e.target.files[0];

  setFormData((prev) => ({
    ...prev,
    thumbnail: file,
  }));
};

const handleImages = (e) => {
  setFormData((prev) => ({
    ...prev,
    images: [...e.target.files],
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
   setLoading(true)

  try {
    const data = new FormData();

    data.append("roomID", formData.roomID);
    data.append("categroyID", formData.categroyID);
    data.append("MaterialID", formData.MaterialID);

    data.append("name", formData.name);
    data.append("slug", formData.slug);

    data.append("originalPrice", formData.originalPrice);
    data.append("salePrice", formData.salePrice);

    data.append("description", formData.description);
    data.append("sortdescription", formData.sortdescription);

    data.append(
      "dimensions",
       { width: formData.width,
        Height: formData.height,
        depth: formData.depth,}
    );

    data.append("weight", formData.weight);
    data.append("color", formData.color);

    data.append("thumbnail", formData.thumbnail);

    await axiosCat.post("/product/create", data);

    toast.success("Product Added");

    router.push("/admin/product");
  } catch (error) {
    console.log(error);

    toast.error(error?.response?.data?.message);
  }finally{
        setLoading(false);
    }
};

  if (loading) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2]">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-300 border-t-[#4B5696]"></div>

        <h2 className="mt-4 text-xl font-semibold text-slate-700">
          Saving Product...
        </h2>

        <p className="mt-2 text-slate-500">
          Please wait while we save your data.
        </p>
      </div>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-[#F8F6F2] p-4 sm:p-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/admin/dashboard">Dashboard</Link>
              <span>/</span>
              <Link href="/admin/category">Categories</Link>
              <span>/</span>
              <span>Add Category</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Add Category
            </h1>

            <p className="mt-2 text-slate-500">
              Create a new product category.
            </p>
          </div>

          <Link
            href="/admin/category"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>

        {/* Form */}
       <form onSubmit={handleSubmit}>
  <div className="grid gap-6 lg:grid-cols-3">

    {/* LEFT */}
    <div className="space-y-6 lg:col-span-2">

      {/* Basic Info */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Basic Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          {/* Product Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleNameChange}
              placeholder="Product Name"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Slug
            </label>

            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="product-slug"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Room */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Room Type
            </label>

            <select
              name="roomID"
              value={formData.roomID}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            >
              <option value="">Select Room</option>

              {roooms.map((room) => (
                <option key={room._id} value={room._id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Category
            </label>

            <select
              name="categroyID"
              value={formData.categroyID}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            >
              <option value="">Select Category</option>

              {category.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Material */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Material
            </label>

            <select
              name="MaterialID"
              value={formData.MaterialID}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            >
              <option value="">Select Material</option>

              {material.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Color
            </label>

            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Brown"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

        </div>

      </div>

      {/* Pricing */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Pricing
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm">
              Original Price
            </label>

            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Sale Price
            </label>

            <input
              type="number"
              name="salePrice"
              value={formData.salePrice}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

        </div>

      </div>

      {/* Dimensions */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Dimensions
        </h2>

        <div className="grid gap-5 md:grid-cols-4">

          <input
            type="number"
            placeholder="Width"
            name="width"
            value={formData.width}
            onChange={handleChange}
            className="rounded-xl border px-4 py-3"
          />

          <input
            type="number"
            placeholder="Height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="rounded-xl border px-4 py-3"
          />

          <input
            type="number"
            placeholder="Depth"
            name="depth"
            value={formData.depth}
            onChange={handleChange}
            className="rounded-xl border px-4 py-3"
          />

          <input
            type="number"
            placeholder="Weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="rounded-xl border px-4 py-3"
          />

        </div>

      </div>

      {/* Description */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Description
        </h2>

        <div className="card w-full rounded-xl border p-4">
               <Editor
    value={formData.description}
    onTextChange={handleEditorChange}
    style={{ height: "320px" }}
  />  
        </div>  
        <textarea
          rows={3}
          name="sortdescription"
          value={formData.sortdescription}
          onChange={handleChange}
          className="mt-4 w-full rounded-xl border p-4"
          placeholder="Short Description"
        />

      </div>

    </div>

    {/* RIGHT */}
    <div className="space-y-6">

      {/* Thumbnail */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-lg font-semibold">
          Thumbnail
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleThumbnail}
          className="w-full rounded-xl border p-3"
        />

        {formData.thumbnail && (
          <img
            src={URL.createObjectURL(formData.thumbnail)}
            className="mt-4 h-40 w-full rounded-xl object-cover"
          />
        )}

      </div>
      {/* Submit */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4B5696] py-4 text-white hover:bg-[#3f4a86]"
      >
        <Save size={18} />
        Save Product
      </button>

    </div>

  </div>
</form>
      </div>
    </div>
  );
}