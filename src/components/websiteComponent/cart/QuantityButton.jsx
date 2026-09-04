"use client";

import { decreaseqty, IncreaseQty } from "@/redux/features/cartSlice";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";

export default function QuantityButton({ id, qty }) {
  const dispatcher = useDispatch();

  function increment(id) {
    dispatcher(
      IncreaseQty({
        id,
      })
    );
  }

  function decrement(id) {
    dispatcher(
      decreaseqty({
        id,
      })
    );
  }

  return (
    <div className="flex items-center gap-1.5 sm:gap-3">

      {/* Minus */}
      <button
        onClick={() => decrement(id)}
        className="
          w-8 h-8
          sm:w-10 sm:h-10
          shrink-0
          rounded-lg
          border
          border-[#E8DED5]
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:bg-[#2c2016]
          hover:text-white
          cursor-pointer
        "
      >
        <Minus size={16} className="sm:w-[18px] sm:h-[18px]" />
      </button>

      {/* Quantity */}
      <span
        className="
          min-w-[28px]
          sm:min-w-[36px]
          px-1
          text-center
          text-base
          sm:text-lg
          font-semibold
          text-[#2c2016]
          whitespace-nowrap
        "
      >
        {qty}
      </span>

      {/* Plus */}
      <button
        onClick={() => increment(id)}
        className="
          w-8 h-8
          sm:w-10 sm:h-10
          shrink-0
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
        <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
      </button>

    </div>
  );
}