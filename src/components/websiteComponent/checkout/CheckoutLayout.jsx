"use client";

import { useState } from "react";
import CheckoutLogo from "./CheckoutLogo";
import CheckoutSteps from "./CheckoutSteps";
import DeliveryForm from "./DeliveryForm";
import ShippingMethod from "./ShippingMethod";
import PaymentSection from "./PaymentSection";
import OrderSummary from "./OrderSummary";
import PurchaseProtection from "./PurchaseProtection";

export default function CheckoutLayout({ user }) {

  const [shipping, setShipping] = useState(0);
  const [payment, setPayment] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(0);


  return (
    <div
      className="
      min-h-screen
      grid
      grid-cols-1
      lg:grid-cols-[1.3fr_1fr]
      "
    >


      {/* LEFT CHECKOUT SECTION */}

      <section
        className="
        px-4
        sm:px-6
        lg:px-8
        py-6
        lg:py-8
        border-b
        lg:border-b-0
        lg:border-r
        border-[#E4DDD5]
        "
      >


        <CheckoutLogo />


        <CheckoutSteps />



        <div className="space-y-8">


          <DeliveryForm
            addresses={user?.addresses || []}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />



          <ShippingMethod
            shippingMethod={shipping}
            setShippingMethod={setShipping}
          />



          <PaymentSection
            paymentMethod={payment}
            setPaymentMethod={setPayment}
          />


        </div>


      </section>




      {/* RIGHT SUMMARY SECTION */}


      <section
        className="
        bg-[#F8F5F1]
        px-4
        sm:px-6
        lg:px-7
        py-6
        lg:py-8
        "
      >


        <div
          className="
          lg:sticky
          lg:top-6
          "
        >

          <OrderSummary
            shippingMethod={shipping}
            paymentMethod={payment}
            addresses={user?.addresses || []}
            selectedAddress={selectedAddress}
          />


          <PurchaseProtection />


        </div>


      </section>


    </div>
  );
}