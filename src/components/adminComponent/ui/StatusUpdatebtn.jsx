"use client";
import { useState } from "react";
import axiosCat from "@/utils/helper";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Updatebtn({ path }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const UpdateStatus = async () => {
    try {
      setLoading(true);

      await axiosCat.patch(path);
      router.refresh();
       toast.success("Status Updated", {
                    position: "top-right",
                  })
    } catch (error) {
      console.error("Status update failed:", error);
      toast.error("Status Not Updated", {
                    position: "top-right",
                  })
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={UpdateStatus}
      disabled={loading}
      className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-green-600 transition-all hover:bg-green-50 hover:border-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <RefreshCw
        size={16}
        className={loading ? "animate-spin" : ""}
      />
      <span className="text-sm font-medium">
        {loading ? "Updating..." : "Update Status"}
      </span>
    </button>
  );
}