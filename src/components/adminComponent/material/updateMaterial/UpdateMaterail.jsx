"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";
import axiosCat from "@/utils/helper";
import { useRouter } from "next/navigation";


export default function UpdateMaterial({ params }) {
  const {material_id} = use(params)

  const router = useRouter();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const GetCategory = async () => {
      try {
        console.log("effext")
        const res = await axiosCat.get(`/material/get/${material_id}`);

        const {material} = res.data;
        setName(material.name);
        setSlug(material.slug);
      } catch (error) {
        console.log(error);
      }
    };

    if (material_id) {
      GetCategory();
    }
  }, [material_id]);

  const handleNameChange = (e) => {
    const value = e.target.value;

    setName(value);

    setSlug(
      value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true)

    try {
      
      await axiosCat.put(
        `/material/edit/${material_id}`,
        {name,slug}
      );

      toast.success("Material Updated", {
        position: "top-right",
      });

      router.push("/admin/material");
    } catch (err) {
      console.log(err);

      toast.error(
        err?.response?.data?.message ||
        "Material Not Updated",
        {
          position: "top-right",
        }
      );
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
          Updating material...
        </h2>

        <p className="mt-2 text-slate-500">
          Please wait while we Update your data.
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
              <Link href="/admin/material">Material</Link>
              <span>/</span>
              <span>Edit Material</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Edit Material
            </h1>

            <p className="mt-2 text-slate-500">
              Edit product Material.
            </p>
          </div>

          <Link
            href="/admin/material"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>

        {/* Form */}
        <div className="rounded-3xl bg-white p-5 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Category Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Material Name
                </label>

                <input
                  type="text"
                  value={name}
                  required
                  onChange={handleNameChange}
                  placeholder="Enter category name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#4B5696]"
                />
              </div>

              {/* Category Slug */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Material Slug
                </label>

                <input
                  type="text"
                  value={slug}
                  required
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Material-slug"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#4B5696]"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-[#4B5696] px-6 py-3 font-medium text-white transition hover:bg-[#3f4a86]"
              >
                <Save size={18} />
                Save Material
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}