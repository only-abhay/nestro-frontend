
import { Pencil } from "lucide-react";
import Link from "next/link";

export default function EditBTN({path}) {
  return (
   <Link href={path} >
    <button
      className="rounded-lg border border-gray-200 p-2 text-blue-600 transition hover:bg-blue-50"
    >
      <Pencil size={18} />
    </button>
   </Link>
  );
}