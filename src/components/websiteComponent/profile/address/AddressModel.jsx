"use client";

import { X } from "lucide-react";
import AddressForm from "./AddressForm";


export default function AddressModal({
  open,
  onClose,
}) {

  if(!open) return null;


  return (

    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/50
      p-3
      overflow-y-auto
      "
    >


      <div
        className="
        relative
        w-full
        max-w-2xl
        max-h-[90vh]
        overflow-y-auto
        rounded-2xl
        bg-white
        p-4
        sm:p-6
        shadow-xl
        "
      >



        <button
          onClick={onClose}
          className="
          absolute
          right-4
          top-4
          rounded-full
          p-2
          hover:bg-[#8b5e3c]
          hover:text-white
          transition
          "
        >

          <X size={20}/>

        </button>




        <h2
          className="
          mb-6
          text-xl
          sm:text-2xl
          font-bold
          pr-10
          "
        >
          Add New Address
        </h2>




        <AddressForm
          onClose={onClose}
        />



      </div>


    </div>

  );
}