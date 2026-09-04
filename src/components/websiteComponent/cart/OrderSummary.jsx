import Link from "next/link";
import Button from "../ui/Button";

export default function OrderSummary({ items }) {

  const subtotal = items.sale_total || 0;
  const originalTotal = items.original_total || 0;

  const discount = originalTotal - subtotal;

  const shipping = subtotal >= 10000 ? 0 : 1000;

  const tax = Math.round(subtotal * 0.05);

  const total = subtotal + shipping + tax;


  return (
    <div className="rounded-3xl border border-[#E8DED5] bg-white p-4 shadow-sm sticky top-24">

      <h2 className="text-2xl font-semibold text-[#2c2016]">
        Order Summary
      </h2>


      <div className="mt-8 space-y-5">


        <div className="flex items-center justify-between">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-medium text-[#2c2016]">
            ₹{subtotal}
          </span>
        </div>



        <div className="flex items-center justify-between">
          <span className="text-gray-500">
            Discount
          </span>

          <span className="font-medium text-green-600">
            -₹{discount}
          </span>
        </div>



        <div className="flex items-center justify-between">
          <span className="text-gray-500">
            Shipping
          </span>

          <span className="font-medium text-[#2c2016]">
            {shipping === 0 ? "Free" : `₹${shipping}`}
          </span>
        </div>



        <div className="flex items-center justify-between">
          <span className="text-gray-500">
            Tax (5%)
          </span>

          <span className="font-medium text-[#2c2016]">
            ₹{tax}
          </span>
        </div>


      </div>


      <div className="my-8 h-px bg-[#E8DED5]" />



      <div className="flex items-center justify-between">

        <span className="text-xl font-semibold text-[#2c2016]">
          Total
        </span>

        <span className="text-3xl font-bold text-[#2c2016]">
          ₹{total}
        </span>

      </div>


   <Link href="/checkout" >
     <Button className="mt-8">
        Proceed to Checkout
      </Button>
   </Link>


      <p className="mt-5 text-center text-sm text-gray-500">
        Estimated delivery in 3–5 business days
      </p>


    </div>
  );
}