"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addcart } from "@/redux/features/cartSlice";

export default function AddCartButton({ product, small = false }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const addToCart = () => {
    dispatch(
      addcart({
        id: product._id,
        name: product.name,
        originalPrice: product.originalPrice,
        salePrice: product.salePrice,
        thumbnail: product.thumbnail,
        color: product.color,
        qty: quantity,
      })
    );
  };

  return (
    <div className="flex items-end justify-between gap-4">
      
      {/* Quantity */}
      {!small && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-500">
            Quantity
          </p>

          <div
            className="
              inline-flex
              items-center
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-sm
              transition-all
              duration-300
              hover:shadow-md
            "
          >
            {/* Minus */}
            <button
              type="button"
              onClick={decrease}
              disabled={quantity === 1}
              aria-label="Decrease quantity"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                text-slate-600
                transition-all
                duration-300
                hover:bg-slate-100
                hover:text-slate-900
                active:scale-90
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              <Minus size={18} strokeWidth={2.5} />
            </button>

            {/* Quantity */}
            <div
              className="
                flex
                h-12
                min-w-16
                items-center
                justify-center
                border-x
                border-slate-200
                bg-slate-50
              "
            >
              <span
                key={quantity}
                className="
                  animate-in
                  zoom-in-75
                  text-lg
                  font-bold
                  text-slate-900
                  duration-200
                "
              >
                {quantity}
              </span>
            </div>

            {/* Plus */}
            <button
              type="button"
              onClick={increase}
              aria-label="Increase quantity"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                text-slate-600
                transition-all
                duration-300
                hover:bg-slate-100
                hover:text-slate-900
                active:scale-90
              "
            >
              <Plus size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}

      {/* Add To Cart */}
      <button
        type="button"
        onClick={addToCart}
        className={`
          inline-flex
          h-12
          items-center
          justify-center
          rounded-full
          border
          border-zinc-800
          bg-black
          font-medium
          text-white
          shadow-sm
          transition-all
          duration-200
          hover:bg-zinc-900
          hover:shadow-md
          active:scale-95
          ${small ? "px-4 text-xs" : "px-7 text-sm"}
        `}
      >
        Add to Cart
      </button>
    </div>
  );
}