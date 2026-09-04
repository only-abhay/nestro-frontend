"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { addcart } from '@/redux/features/cartSlice'
import axiosCat from '@/utils/helper'
export default function Addtocartbtn({product}) {
  const dispatch = useDispatch()
 
async function AddtoCart(product) {

  const payload = {
    id: product._id,
    name: product.name,
    originalPrice: product.originalPrice,
    salePrice: product.salePrice,
    thumbnail: product.thumbnail,
    color: product.color,
    qty: 1,
  };

  dispatch(addcart(payload));

  try {

    await axiosCat.post("/cart/add", {
      productId: product._id,
      qty: 1,
      
    });

  } catch (error) {
    console.log(error);
  }
}
 
  return (
         <div onClick={()=> AddtoCart(product)} className="absolute bottom-0 left-0 right-0 bg-[#2C2016]/90 text-[#D6BFA7] text-xs text-center py-3 opacity-0 group-hover:opacity-100 transition">
          Add Product
        </div>
      

  )
}
