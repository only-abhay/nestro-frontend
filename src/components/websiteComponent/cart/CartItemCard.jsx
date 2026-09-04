"use client";

import { Trash2 } from "lucide-react";

import Price from "../ui/Price";
import QuantityButton from "./QuantityButton";
import { useDispatch } from "react-redux";
import { removeFromcart } from "@/redux/features/cartSlice";

export default function CartItemCard({ item }) {
  const dispatcher = useDispatch();

  function onDelete(id) {
    dispatcher(
      removeFromcart({
        id,
      })
    );
  }

  return (
    <div className="mb-3">
      <div
        className="
          flex
          gap-2
          sm:gap-3
          rounded-xl
          border
          border-[#E8DED5]
          bg-white
          p-2.5
          sm:p-3
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            h-20
            w-20
            sm:h-24
            sm:w-24
            md:h-28
            md:w-28
            shrink-0
            overflow-hidden
            rounded-lg
            bg-[#F7F4EF]
          "
        >
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-1
            min-w-0
            flex-col
            gap-1.5
          "
        >
          {/* NAME + PRICE */}
          <div
            className="
              flex
              items-start
              justify-between
              gap-2
              min-w-0
            "
          >
            <h2
              className="
                min-w-0
                flex-1
                line-clamp-2
                text-xs
                sm:text-sm
                md:text-base
                font-semibold
                leading-tight
                text-[#2c2016]
              "
            >
              {item.name}
            </h2>

            <div className="shrink-0 text-xs sm:text-sm">
              <Price
                price={item.salePrice * item.qty}
                oldPrice={item.originalPrice * item.qty}
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              text-[10px]
              sm:text-[11px]
              text-gray-500
              line-clamp-1
            "
          >
            Best Product
          </p>

          {/* OPTIONS */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-2
              text-[10px]
              sm:text-[11px]
              text-gray-500
            "
          >
            <span>
              Color:
              <b className="ml-1 text-[#2c2016]">
                {item.color}
              </b>
            </span>
          </div>

          {/* ACTION ROW */}
          <div
            className="
              mt-auto
              flex
              items-center
              justify-between
              gap-2
              pt-1
            "
          >
            <div className="scale-[0.85] origin-left sm:scale-100">
              <QuantityButton
                id={item.id}
                qty={item.qty}
              />
            </div>

            <button
              onClick={() => onDelete(item.id)}
              className="
                h-7
                w-7
                sm:h-8
                sm:w-8
                shrink-0
                rounded-lg
                border
                border-[#E8DED5]
                flex
                items-center
                justify-center
                cursor-pointer
                transition
                hover:bg-[#2c2016]
                hover:text-white
              "
            >
              <Trash2 size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}