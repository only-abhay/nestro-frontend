"use client"
import React from 'react'
import { useSearchParams,useRouter } from 'next/navigation'

export default function Instock() {
          const router = useRouter() 
    
        const searchParams = useSearchParams()
    let stock = searchParams.get("stock") || []


   function StockChecker() {
  const params = new URLSearchParams(searchParams.toString());

  if (stock === "inStock") {
    // Filter already applied -> remove it
    params.delete("stock");
  } else {
    // Apply filter
    params.set("stock", "inStock");
  }

  router.push(`?${params.toString()}`, {
  scroll: false,
});
}
    
  return (
    <div className="mb-[22px]">
  <div className="text-[12px] font-medium mb-[11px]">
    Availability
  </div>

  <label className="flex items-center gap-[9px] cursor-pointer">
    <input
    onClick={StockChecker}
      type="checkbox"
      className="w-[15px] h-[15px] accent-[#8B5E3C]"
    />
    <span className="text-[12px] text-[#444444]">
      In Stock
    </span>
  </label>
</div>
  )
}
