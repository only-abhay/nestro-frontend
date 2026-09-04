"use client"
import { useSelector } from "react-redux";
import Addtocartbtn from "./Addtocartbtn";
import Link from 'next/link'


export default function ProductCard({ product }) {
  return (
    <div
     style={{ height: "380px" }}
      className="
       
        group
        bg-white
        rounded-xl
        border
        border-[#EDE5DA]
        overflow-hidden
        hover:-translate-y-1
        hover:shadow-xl
        transition
        flex
        flex-col
      "
    >
      {/* Image Section */}
             <div  style={{ height: "220px" }} className="relative shrink-0 bg-[#F5F0EB] flex items-center justify-center overflow-hidden">
              <Link href={`/product/${product._id}`}>
               <img
          src={product.thumbnail || "/placeholder.png"}
          alt={product.name}
          className="w-full h-full object-cover  group-hover:scale-105 transition duration-300"
        />
 </Link>

        <div className="absolute top-3 left-3 bg-white text-[#8B5E3C] text-[10px] px-2 py-1 rounded font-medium">
          SALE
        </div>

      <Addtocartbtn product={product}/>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500 mb-1">
          {product.categroyID.name}
        </p>

        <h3 className="font-medium line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-auto flex justify-between items-center">
          <span className="text-xs text-[#C6A27E]">
            ★★★★★ (48)
          </span>

          <div className="flex gap-2 items-center">
            <span className="font-semibold">
              ₹{product.salePrice}
            </span>

            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}