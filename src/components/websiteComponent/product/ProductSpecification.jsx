"use client";

import {
  Package,
  Palette,
  Weight,
  Boxes,
  Home,
  Layers,
  Sofa
} from "lucide-react";


export default function ProductSpecification({
  product
}) {


  const specs = [
    {
      label: "Product Name",
      value: product?.name || "-",
      icon: Sofa
    },

    {
      label: "Color",
      value: product?.color || "-",
      icon: Palette
    },

    {
      label: "Weight",
      value: product?.weight
        ? `${product.weight} Kg`
        : "-",
      icon: Weight
    },

    {
      label: "Availability",
      value: product?.stock
        ? "In Stock"
        : "Out of Stock",
      icon: Boxes,
      status:true
    },

    {
      label: "Room",
      value: product?.roomID?.name || "-",
      icon: Home
    },

    {
      label: "Category",
      value: product?.categroyID?.name || "-",
      icon: Layers
    },

    {
      label: "Material",
      value: product?.MaterialID?.name || "-",
      icon: Package
    },
  ];




  return (

    <section
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      shadow-sm
      overflow-hidden
      transition-all
      duration-300
      hover:shadow-lg
      "
    >


      {/* Header */}

      <div
        className="
        px-6
        sm:px-8
        py-6
        border-b
        bg-gradient-to-r
        from-slate-50
        to-white
        "
      >

        <h2
          className="
          text-xl
          sm:text-2xl
          font-bold
          text-slate-900
          tracking-tight
          "
        >
          Product Specifications
        </h2>


        <p
          className="
          text-sm
          text-slate-500
          mt-1
          "
        >
          Detailed information about this product
        </p>

      </div>




      {/* Specification List */}

      <div
        className="
        divide-y
        divide-slate-100
        px-6
        sm:px-8
        "
      >


        {
          specs.map((item,index)=>{


            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                group
                flex
                items-center
                justify-between
                gap-4
                py-5
                transition-all
                duration-300
                hover:bg-slate-50
                "
              >


                {/* Left */}

                <div
                  className="
                  flex
                  items-center
                  gap-4
                  "
                >

                  <div
                    className="
                    h-10
                    w-10
                    rounded-xl
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                    text-slate-600
                    group-hover:bg-slate-900
                    group-hover:text-white
                    transition-all
                    duration-300
                    "
                  >

                    <Icon
                      size={20}
                    />

                  </div>



                  <p
                    className="
                    text-sm
                    sm:text-base
                    text-slate-500
                    "
                  >
                    {item.label}
                  </p>


                </div>





                {/* Right Value */}

                <p
                  className={`
                  text-sm
                  sm:text-base
                  font-semibold
                  text-right
                  ${
                    item.status
                    ?
                    product.stock
                      ?
                      "text-emerald-600"
                      :
                      "text-red-500"
                    :
                    "text-slate-900"
                  }
                  `}
                >

                  {item.value}

                </p>



              </div>

            )


          })
        }



      </div>



    </section>

  )

}