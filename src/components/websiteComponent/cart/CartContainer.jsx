"use client";

import { useMemo, useState } from "react";

import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";
import { useSelector } from "react-redux";


import { cartData } from "@/data/cartData";

export default function CartContainer() {
  const cart = useSelector((store)=>store.cart.cart)
  const sub = useSelector((store)=>store.cart)


  if (!cart.length) {
    return (
      <section className="bg-[#FAF7F3] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <EmptyCart />
        </div>
      </section>
    );
  }


  return (
    <section className="
      bg-[#FAF7F3]
      min-h-screen
      py-8
      sm:py-12
      lg:py-16
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
      ">

        <CartHeader />


        <div className="
          mt-8
          sm:mt-10
          flex
          flex-col
          gap-8
          lg:flex-row
          lg:gap-10
        ">


          {/* LEFT SIDE */}
          <div className="
            w-full
            lg:w-[65%]
            min-w-0
          ">
            <CartItems
            items = {cart}
            />
          </div>



          {/* RIGHT SIDE */}
          <aside className="
            w-full
            lg:w-[35%]
            min-w-0
          ">

            <div className="
              space-y-5
              lg:sticky
              lg:top-24
            ">

              <OrderSummary
              items={sub}
              />

            </div>

          </aside>


        </div>

      </div>

    </section>
  );
}