

"use client";
import { useState } from "react";
import axiosCat from "@/utils/helper";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Updatebtn({ flag, value, id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const UpdateStatus = async () => {
    try {
      setLoading(true);
       console.log(value);

            await axiosCat.put(`/product/status/${id}` ,{flag} )
      router.refresh();
       toast.success(`${flag} Updated`, {
                    position: "top-right",
                  })
    } catch (error) {
      console.error("Status update failed:", error);
      toast.error(`${flag} not Updated`, {
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

      className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200
        ${
          value
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
    >
      {flag}
    </button>
  );
}