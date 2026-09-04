"use client";

import { useSelector } from "react-redux";
import PromoCode from "./PromoCode";
import PlaceOrderButton from "./PlaceOrderButton";


export default function OrderSummary({
  paymentMethod,
  shippingMethod,
  addresses,
  selectedAddress
}) {


  const cart = useSelector(
    (store)=>store.cart
  );



  const subtotal =
    cart.sale_total || 0;


  const originalTotal =
    cart.original_total || 0;



  const discount =
    originalTotal - subtotal;



  const shippingCharge =
    shippingMethod === 1
    ? 499
    : 0;



  const codCharge =
    paymentMethod === 0
    ? 100
    : 0;



  const tax =
    Math.round(subtotal * 0.05);



  const total =
    subtotal +
    shippingCharge +
    codCharge +
    tax;




  return (
    <>


      <div
        className="
        bg-white
        border
        border-[#E4DDD5]
        rounded-xl
        p-4
        sm:p-5
        mb-4
        "
      >



        <h3
          className="
          text-sm
          font-medium
          text-[#2F2A27]
          border-b
          border-[#E4DDD5]
          pb-3
          mb-4
          "
        >
          Order Summary
        </h3>




        <div
          className="
          space-y-2
          "
        >


          <SummaryRow
            title="Subtotal"
            value={`₹${subtotal.toLocaleString()}`}
          />



          <SummaryRow
            title="Delivery"
            value={
              shippingCharge === 0
              ?
              "Free"
              :
              `₹${shippingCharge}`
            }
            green={
              shippingCharge === 0
            }
          />



          <SummaryRow
            title="Assembly"
            value="Free"
            green
          />



          {
            codCharge > 0 &&

            <SummaryRow
              title="Cash on Delivery Charge"
              value={`₹${codCharge}`}
            />

          }




          <SummaryRow
            title="Discount"
            value={`-₹${discount.toLocaleString()}`}
            green
          />



          <SummaryRow
            title="Tax (5%)"
            value={`₹${tax.toLocaleString()}`}
          />




          <div
            className="
            flex
            justify-between
            text-sm
            font-medium
            text-[#2F2A27]
            border-t
            border-[#E4DDD5]
            pt-3
            mt-3
            "
          >

            <span>
              Total
            </span>


            <span>
              ₹{total.toLocaleString()}
            </span>


          </div>


        </div>


      </div>




      <PromoCode />



      <PlaceOrderButton
        paymentMethod={paymentMethod}
        selectedAddress={
          addresses[selectedAddress]
        }
        total={total}
        shippingMethod={shippingMethod}
      />



    </>
  );
}




function SummaryRow({
  title,
  value,
  green=false
}) {


  return (

    <div
      className="
      flex
      justify-between
      gap-4
      text-xs
      text-[#5F5853]
      "
    >

      <span>
        {title}
      </span>


      <span
        className={
          green
          ?
          "text-[#3B6D11]"
          :
          ""
        }
      >
        {value}
      </span>


    </div>

  );
}