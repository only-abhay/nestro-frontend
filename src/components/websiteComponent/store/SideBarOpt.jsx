"use client"
import { useRouter, useSearchParams  } from "next/navigation";
import React from 'react'

export default function SideBarOpt({Option , name , querykey}) {

  const searchParams = useSearchParams()
  const router = useRouter() 
  let data = searchParams.get(querykey)?.split(",") || []

 function handleCheckbox(value){

  const params = new URLSearchParams(searchParams.toString())
  let CurrentValue = searchParams.get(querykey)?.split(",") || []
  let UpdatedValue = [...CurrentValue]



if(CurrentValue.includes(value)){
   UpdatedValue = UpdatedValue.filter((d)=> d !== value)
}else{
  UpdatedValue.push(value)
}
if(UpdatedValue.length > 0){

params.set(
querykey,
UpdatedValue.join(",")
);

}
else{

params.delete(querykey);
}

router.push(
`/store?${params.toString()}`, {
  scroll: false,
}
);
 }
 function Clearquery(){
  const params = new URLSearchParams(searchParams.toString())
  params.delete(querykey)

  router.push(`/store?${params.toString()}`, {
  scroll: false,
})

 }
   
  return (
  <div className="mb-[22px]">
  {/* Header */}
  <div className="flex items-center justify-between mb-[11px]">
    <div className="text-[12px] font-medium">
      {name}
    </div>
{data.length > 0 && (
  <button
  onClick={Clearquery}
    className="
      text-[10px]
      text-[#8B5E3C]
      hover:underline
      transition
    "
  >
    Clear
  </button>
)}
  </div>

  {/* Options */}
  {Option?.length === 0 ? (
    <p className="text-[11px] text-gray-400">Loading...</p>
  ) : (
    Option.map((item) => {
      const active = data.includes(item.slug);

      return (
        <label
          key={item._id}
          className="flex items-center gap-[9px] mb-[8px] cursor-pointer"
        >
          <input
            checked={active}
            type="checkbox"
            onChange={() => handleCheckbox(item.slug)}
            className="w-[15px] h-[15px] accent-[#8B5E3C]"
          />

          <span className="text-[12px] text-[#444444]">
            {item.name}
          </span>
        </label>
      );
    })
  )}
</div>
  )
}
