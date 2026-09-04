"use client";

import {
  Truck,
  ShieldCheck,
  RotateCcw,
  PackageCheck,
} from "lucide-react";

import ProductPrice from "./ProductPrice";
import ProductBadges from "./ProductBadges";
import AddCartButton from "./AddTocart";


export default function ProductInfo({
  product,
  discount,
}) {


  return (

    <div className="space-y-8">


      {/* Badges */}

      <ProductBadges product={product} />





      {/* Title Section */}

      <div>

        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-[46px]
            leading-tight
            font-semibold
            tracking-tight
            text-slate-900
          "
        >
          {product.name}
        </h1>


        <p
          className="
            mt-4
            max-w-xl
            text-base
            leading-8
            text-slate-600
          "
        >
          {product.sortdescription}
        </p>


      </div>







      {/* Price */}

      <ProductPrice

        product={product}

        discount={discount}

      />








      {/* Availability */}

      <div
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-slate-200
          bg-white
          px-5
          py-3
          shadow-sm
        "
      >

        <span
          className={`
            h-3
            w-3
            rounded-full
            animate-pulse

            ${
              product.stock
              ?
              "bg-emerald-500"
              :
              "bg-red-500"
            }

          `}
        />


        <span
          className="
            text-sm
            font-semibold
            text-slate-700
          "
        >

          {
            product.stock
            ?
            "Available in Stock"
            :
            "Currently Unavailable"
          }

        </span>


      </div>









      {/* Product Attributes */}


      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
        "
      >



        {/* Color */}

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            transition
            hover:shadow-md
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Color
          </p>


          <div
            className="
              mt-3
              flex
              items-center
              gap-3
            "
          >

            <span

              className="
                h-8
                w-8
                rounded-full
                border
                border-slate-300
                shadow-inner
              "

              style={{
                backgroundColor:
                product.color
              }}

            />


            <span
              className="
                font-semibold
                capitalize
              "
            >
              {product.color}
            </span>


          </div>


        </div>







        {/* Weight */}

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            transition
            hover:shadow-md
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Weight
          </p>


          <p
            className="
              mt-3
              font-semibold
              text-slate-900
            "
          >
            {product.weight} Kg
          </p>


        </div>


      </div>










      {/* Quantity */}

   <AddCartButton product={product} />









      {/* Trust Section */}


      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-4
          pt-3
        "
      >


        <TrustCard

          icon={Truck}

          title="Free Delivery"

          desc="Fast & Safe Shipping"

        />


        <TrustCard

          icon={ShieldCheck}

          title="Secure Pay"

          desc="Protected Checkout"

        />


        <TrustCard

          icon={RotateCcw}

          title="Easy Return"

          desc="7 Days Return"

        />


      </div>



    </div>

  );

}








function TrustCard({
  icon: Icon,
  title,
  desc,
}){


return (

<div

className="
group
rounded-2xl
border
border-slate-200
bg-white
p-5
transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
"

>


<div

className="
flex
items-center
gap-4
"

>


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-emerald-50
text-emerald-600
transition
duration-300
group-hover:bg-emerald-600
group-hover:text-white
"

>

<Icon size={22}/>

</div>



<div>

<h4
className="
text-sm
font-semibold
text-slate-900
"
>
{title}
</h4>


<p
className="
mt-1
text-xs
text-slate-500
"
>
{desc}
</p>


</div>


</div>


</div>

)

}