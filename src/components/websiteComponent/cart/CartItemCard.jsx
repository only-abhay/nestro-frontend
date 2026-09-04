"use client";
import { Pencil, Trash2 } from "lucide-react";

import Price from "../ui/Price";
import QuantityButton from "./QuantityButton";
import { useDispatch } from "react-redux";
import { removeFromcart } from "@/redux/features/cartSlice";

export default function CartItemCard({item}) {

 const dispatcher = useDispatch()
function onDelete(id){
  dispatcher(
    removeFromcart({
      id
    })
  )

}

  return (
    <div className="mb-3">

      <div
        className="
          flex
          gap-3
          rounded-xl
          border
          border-[#E8DED5]
          bg-white
          p-3
          sm:p-4
        "
      >

        {/* IMAGE */}

        <div
          className="
            relative
            h-20
            w-20
            xs:h-24
            xs:w-24
            sm:h-28
            sm:w-28
            shrink-0
            overflow-hidden
            rounded-xl
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
            gap-2
          "
        >


          {/* NAME + PRICE */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-2
            "
          >

            <h2
              className="
                truncate
                text-sm
                sm:text-base
                font-semibold
                text-[#2c2016]
              "
            >
              {item.name}
            </h2>


            <div className="shrink-0">
              <Price
                price={item.salePrice * item.qty }
                oldPrice={item.originalPrice * item.qty}
              />
            </div>

          </div>




          {/* DESCRIPTION */}

          <p
            className="
              text-[11px]
              sm:text-xs
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
              gap-x-3
              text-[11px]
              sm:text-xs
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
              flex
              items-center
              justify-between
              gap-2
              mt-1
            "
          >

            <QuantityButton
            id={item.id}
            qty ={item.qty}
            />



            <div
              className="
                flex
                gap-1.5
              "
            >

              <button
                onClick={() => onDelete(item.id)}
                className="
                  h-8
                  w-8
                  sm:h-9
                  sm:w-9
                  rounded-lg
                  border
                  border-[#E8DED5]
                  flex
                  items-center
                  justify-center
               cursor-pointer
                 
                  transition
                "
              >
                <Trash2 size={14}/>
              </button>

            </div>


          </div>


        </div>


      </div>

    </div>
  );
}