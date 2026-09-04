"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";
import axiosCat from "@/utils/helper";
import { useRouter } from "next/navigation";


export default function Updatecategory({ params }) {
  const { category_id } = use(params)

  const router = useRouter();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);



  useEffect(() => {
    const GetCategory = async () => {
      try {
        const res = await axiosCat.get(`/category/get/${category_id}`);

        const category = res.data.category;
        setName(category.name);
        setSlug(category.slug);
        setPreview(category.image);
      } catch (error) {
        console.log(error);
      }
    };

    if (category_id) {
      GetCategory();
    }
  }, [category_id]);

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

      const formData = new FormData();
     

      formData.append("name", name);
      formData.append("slug", slug);

      if (image) {
        formData.append("image", image);
      }

      await axiosCat.put(
        `/category/edit/${category_id}`,
        formData
      );

      toast.success("Category Updated", {
        position: "top-right",
      });

      router.push("/admin/category");
    } catch (err) {
      console.log(err);

      toast.error(
        err?.response?.data?.message ||
        "Category Not Updated",
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
          Updating Category...
        </h2>

        <p className="mt-2 text-slate-500">
          Please wait while we Updating your data.
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
              <span>Edit Category</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Edit Category
            </h1>

            <p className="mt-2 text-slate-500">
              Edit product category.
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
        <div className="rounded-3xl bg-white p-5 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Category Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Category Name
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
                  Category Slug
                </label>

                <input
                  type="text"
                  value={slug}
                  required
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="category-slug"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#4B5696]"
                />
              </div>

              {/* Category Image */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Category Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    setImage(file);

                    if (file) {
                      setPreview(URL.createObjectURL(file));
                    }
                  }}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#4B5696]"
                />{preview && (
                  <div className="mt-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-32 w-32 rounded-xl border object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-[#4B5696] px-6 py-3 font-medium text-white transition hover:bg-[#3f4a86]"
              >
                <Save size={18} />
                Save Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}