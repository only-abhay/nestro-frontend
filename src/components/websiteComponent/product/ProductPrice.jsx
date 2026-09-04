export default function ProductPrice({
  product,
  discount,
}) {


  const salePrice =
    Number(product?.salePrice || 0)
      .toLocaleString("en-IN");


  const originalPrice =
    Number(product?.originalPrice || 0)
      .toLocaleString("en-IN");




  return (

    <div
      className="
        space-y-4
      "
    >



      <div
        className="
          flex
          flex-wrap
          items-end
          gap-4
        "
      >



        {/* Current Price */}

        <h2
          className="
            text-4xl
            sm:text-5xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >

          ₹{salePrice}

        </h2>





        {/* Original Price */}


        {
          product?.originalPrice && (

          <span

            className="
              mb-1
              text-lg
              sm:text-xl
              font-medium
              text-slate-400
              line-through
            "

          >

            ₹{originalPrice}

          </span>

          )
        }







        {/* Discount Badge */}


        {
          discount > 0 && (

          <span
            className="
              mb-1
              inline-flex
              items-center
              rounded-full
              bg-emerald-50
              px-4
              py-2
              text-sm
              font-semibold
              text-emerald-700
              ring-1
              ring-emerald-200
              transition
              hover:bg-emerald-100
            "
          >

            Save {discount}%

          </span>

          )
        }


      </div>








      {/* Extra Info */}


      <div
        className="
          flex
          items-center
          gap-2
          text-sm
          text-slate-500
        "
      >


        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-emerald-500
          "
        />


        <p>
          Inclusive of all taxes
        </p>


      </div>






      {/* Price Highlight */}


      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-4
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
          Best Price Guaranteed
        </p>


        <p
          className="
            mt-1
            text-sm
            font-medium
            text-slate-700
          "
        >

          Limited time offer available

        </p>


      </div>




    </div>

  );

}