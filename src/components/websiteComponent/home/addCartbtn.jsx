"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { addcart } from '@/redux/features/cartSlice'


export default function AddCartbtn({product}) {
      const dispatcher = useDispatch()
     
  function AddtoCart(product){
   dispatcher(
   addcart({
    id:product._id,
    name:product.name,
    originalPrice:product.originalPrice,
    salePrice:product.salePrice,
    thumbnail:product.thumbnail,
    color:product.color,
    qty:1
   })
   )
  }
  return (
         <button
         onClick={()=> AddtoCart(product)}
            className="
              rounded-lg
              bg-black
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-zinc-800
            "
          >
            Add
          </button>
  )
}
