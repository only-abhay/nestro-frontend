"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Save, UploadCloud, Trash2 } from "lucide-react";
import { toast } from "sonner";
import axiosCat from "@/utils/helper";
import { useRouter, useParams } from "next/navigation";

export default function Page() {
  const { image_id } = useParams();
  const router = useRouter();

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosCat.get(`/product/get/${image_id}`);
        setExistingImages(res.data?.images || []);
      } catch (err) {
        console.log(err);
      }
    };

    if (image_id) fetchData();
  }, [image_id]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData();

    images.forEach((img) => {
      formData.append("images", img);
    });

    await axiosCat.post(
      `/product/image/${image_id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success("Images updated successfully");
    router.push("/admin/product");

  } catch (err) {
    toast.error(err?.response?.data?.message || "Upload failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-3 sm:p-6">

      {/* HEADER */}
      <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Update Product Images
          </h1>
          <p className="text-slate-500 mt-1">
            Manage product gallery images
          </p>
        </div>

        <Link
          href="/admin/product"
          className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2 text-slate-700 shadow-sm hover:bg-slate-50"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {/* CARD */}
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-white p-4 shadow-sm sm:p-6"
      >

        {/* UPLOAD BOX */}
        <div className="mb-6 rounded-2xl border-2 border-dashed border-slate-300 p-5 text-center transition hover:border-indigo-400 sm:p-8">

          <UploadCloud className="mx-auto text-slate-400" size={40} />

          <p className="mt-3 text-slate-600 font-medium">
            Drag & drop images or click to upload
          </p>

          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="mx-auto mt-4 block max-w-full text-sm"
          />
        </div>

        {/* NEW IMAGES */}
        {images.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-slate-700">
              New Images
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {images.map((img, i) => (
                <div key={i} className="relative group">

                  <img
                    src={URL.createObjectURL(img)}
                    alt={`New product image ${i + 1}`}
                    className="h-28 w-full object-cover rounded-xl border"
                  />

                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBMIT */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? "Saving..." : "Save Images"}
          </button>
        </div>

      </form>
    </div>
  );
}