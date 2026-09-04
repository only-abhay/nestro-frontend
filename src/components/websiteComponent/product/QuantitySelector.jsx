"use client";

import {
  Minus,
  Plus
} from "lucide-react";

import {
  useState
} from "react";


export default function QuantitySelector() {


  const [quantity,setQuantity] = useState(1);



  const decrease = () => {

    setQuantity((prev)=> 
      prev > 1 
      ? prev - 1 
      : prev
    );

  };



  const increase = () => {

    setQuantity((prev)=> prev + 1);

  };





  return (

    <div
      className="
      space-y-3
      "
    >


      {/* Label */}

      <p
        className="
        text-sm
        font-medium
        text-slate-500
        "
      >
        Quantity
      </p>





      {/* Selector */}

      <div
        className="
        inline-flex
        items-center
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        overflow-hidden
        transition-all
        duration-300
        hover:shadow-md
        "
      >



        {/* Minus Button */}

        <button

          type="button"

          onClick={decrease}

          disabled={quantity===1}

          aria-label="Decrease quantity"

          className="
          h-12
          w-12

          flex
          items-center
          justify-center

          text-slate-600

          transition-all
          duration-300

          hover:bg-slate-100
          hover:text-slate-900

          active:scale-90

          disabled:
          cursor-not-allowed

          disabled:
          opacity-40
          "

        >

          <Minus
            size={18}
            strokeWidth={2.5}
          />

        </button>







        {/* Quantity */}

        <div
          className="
          h-12
          min-w-16

          flex
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
            text-lg
            font-bold
            text-slate-900

            animate-in
            zoom-in-75
            duration-200
            "
          >
            {quantity}
          </span>


        </div>







        {/* Plus Button */}

        <button

          type="button"

          onClick={increase}

          aria-label="Increase quantity"

          className="
          h-12
          w-12

          flex
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

          <Plus
            size={18}
            strokeWidth={2.5}
          />

        </button>




      </div>


    </div>

  )

}