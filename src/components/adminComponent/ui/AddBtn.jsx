import React from 'react'
import Link from 'next/link'
import { Plus } from "lucide-react";


function AddBtn({href , name}) {
  return (
   <Link href={href}>
      <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
        <Plus size={18} />
        {name}
      </button>
    </Link>
  )
}

export default AddBtn