"use client";

import { useState } from "react";
import axiosCat from "@/utils/helper";
import { Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Deletebtn({ path }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const DeleteData = async () => {
    try {
      setLoading(true);

      await axiosCat.delete(path);

      toast.success("Deleted Successfully", {
        position: "top-right",
      });

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.log(error);

      toast.error("Delete Failed", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-red-200 p-2.5 text-red-600 transition hover:bg-red-50 hover:border-red-300"
      >
        <Trash2 size={18} />
      </button>

      {/* Confirmation Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <Trash2 size={30} className="text-red-600" />
            </div>

            <h2 className="mt-5 text-center text-2xl font-bold text-slate-800">
              Delete Item?
            </h2>

            <p className="mt-3 text-center text-slate-500">
              This action cannot be undone. The item will be permanently deleted.
            </p>

            <div className="mt-8 flex gap-3">

              <button
                onClick={() => setOpen(false)}
                disabled={loading}
                className="flex-1 rounded-xl border border-slate-200 py-3 font-medium hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                onClick={DeleteData}
                disabled={loading}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-medium text-white hover:bg-red-700 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={18} />
                    Delete
                  </>
                )}
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}