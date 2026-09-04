import React, { useState } from 'react'
import { useSearchParams , useRouter } from 'next/navigation'

export default function PriceRange() {
      const router = useRouter() 
    
    const searchParams = useSearchParams()
    const [price, setPrice] = useState({min:"",max:""})
    let min = searchParams.get("min") || []
    let max = searchParams.get("max") || []

    function PriceRange() {
  const params = new URLSearchParams(searchParams.toString())

if(price.min && price.max){
    params.set("min" ,price.min )
    params.set("max" ,price.max )
}else{
        params.delete("min")
        params.delete("max")
     }
     router.push(
`/store?${params.toString()}`, {
  scroll: false,
}
);
     }
     function clearHandler(){
  const params = new URLSearchParams(searchParams.toString())

           params.delete("min")
        params.delete("max")

          router.push(
`/store?${params.toString()}`, {
  scroll: false,
}
);
     }

    return (
        <div className="mb-6 rounded-xl border border-[#E8E0D5] bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2C2016] mb-4">
                Price Range
            </h3>

            <div className="space-y-3">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={price.min}
                    onChange={(e)=> setPrice({...price, min : e.target.value})}
                    className="
        w-full
        rounded-lg
        border
        border-[#E8E0D5]
        bg-[#FAFAF9]
        px-3
        py-2.5
        text-sm
        outline-none
        transition
        focus:border-[#8B5E3C]
        focus:ring-2
        focus:ring-[#8B5E3C]/20
      "
                />

                <input
                    type="number"
                    placeholder="Max Price"
                    value={price.max}
                    onChange={(e)=> setPrice({...price, max : e.target.value})}
                    className="
        w-full
        rounded-lg
        border
        border-[#E8E0D5]
        bg-[#FAFAF9]
        px-3
        py-2.5
        text-sm
        outline-none
        transition
        focus:border-[#8B5E3C]
        focus:ring-2
        focus:ring-[#8B5E3C]/20
      "
                />
            </div>

            <div className="mt-4 flex gap-2">
                <button
                    onClick={PriceRange}
                    className="
        flex-1
        rounded-lg
        bg-[#8B5E3C]
        px-4
        py-2.5
        text-sm
        font-medium
        text-white
        transition
        hover:bg-[#734B2D]
      "
                >
                    Apply
                </button>

                <button
                onClick={clearHandler}
                    className="
        rounded-lg
        border
        border-[#E8E0D5]
        px-4
        py-2.5
        text-sm
        font-medium
        text-[#555]
        transition
        hover:bg-[#F5F5F5]
      "
                >
                    Clear
                </button>
            </div>
        </div>
    )
}
