"use client";

import { Trash2 } from "lucide-react";

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
            shrink-0
            overflow-hidden
            rounded-lg
            bg-[#F7F4EF]
            sm:h-24
            sm:w-24
            md:h-28
            md:w-28
          "
        >
          <img
            src={item.thumbnail}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            gap-1.5
          "
        >
          {/* NAME + PRICE */}
          <div
            className="
              flex
              min-w-0
              items-start
              justify-between
              gap-2
            "
          >
            {/* PRODUCT NAME */}
            <h2
              className="
                min-w-0
                flex-1
                line-clamp-2
                text-xs
                font-semibold
                leading-tight
                text-[#2c2016]
                sm:text-sm
                md:text-base
              "
            >
              {item.name}
            </h2>

            {/* PRICE */}
            <div
              className="
                shrink-0
                text-right
                leading-tight
              "
            >
              {/* MRP */}
              {item.originalPrice && (
                <p
                  className="
                    text-[10px]
                    font-medium
                    text-gray-400
                    line-through
                    sm:text-xs
                  "
                >
                  ₹{item.originalPrice * item.qty}
                </p>
              )}

              {/* SALE PRICE */}
              <p
                className="
                  text-xs
                  font-semibold
                  text-[#2c2016]
                  sm:text-sm
                "
              >
                ₹{item.salePrice * item.qty}
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              line-clamp-1
              text-[10px]
              text-gray-500
              sm:text-[11px]
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
              text-gray-500
              sm:text-[11px]
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
            {/* QUANTITY */}
            <div className="scale-[0.85] origin-left sm:scale-100">
              <QuantityButton
                id={item.id}
                qty={item.qty}
              />
            </div>

            {/* DELETE */}
            <button
              onClick={() => onDelete(item.id)}
              className="
                flex
                h-7
                w-7
                shrink-0
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                border
                border-[#E8DED5]
                transition
                hover:bg-[#2c2016]
                hover:text-white
                sm:h-8
                sm:w-8
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