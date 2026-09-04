"use client";

import { decreaseqty, IncreaseQty } from "@/redux/features/cartSlice";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";

export default function QuantityButton({id,qty}) {
  const dispatcher = useDispatch()

  function increment(id){
    dispatcher(
      IncreaseQty({
        id
      })
    )
  }
  function decrement(id){
    dispatcher(
      decreaseqty({
        id,
      })
    )
  }
  return (
    <div className="flex items-center gap-3">

      <button
      onClick={()=>decrement(id)}
  
        className="
          w-10
          h-10
          rounded-lg
          border
          border-[#E8DED5]
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:bg-[#2c2016]
          cursor-pointer
        "
      >
        <Minus size={18} />
      </button>

      <span className="w-6 text-center text-lg font-semibold text-[#2c2016]">
       {qty}
      </span>

      <button
      onClick={()=>increment(id)}

        className="
          w-10
          h-10
          rounded-lg
          border
          border-[#E8DED5]
          bg-white
          flex
          items-center
          justify-center
          transition-all
          duration-300
          cursor-pointer
        "
      >
          
        <Plus size={18} />
      </button>

    </div>
  );
}