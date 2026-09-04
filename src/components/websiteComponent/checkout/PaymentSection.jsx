"use client";

import {
  CreditCard,
  Banknote
} from "lucide-react";


export default function PaymentSection({
  setPaymentMethod,
  paymentMethod
}) {


  const options = [
    {
      id:"cod",
      title:"Cash on Delivery",
      desc:"Pay when your order arrives",
      icon:Banknote,
    },

    {
      id:"prepaid",
      title:"Prepaid Payment",
      desc:"Pay securely online using UPI, Card or Net Banking",
      icon:CreditCard,
    },
  ];



  return (
    <div>


      <h3
        className="
        mb-4
        text-[13px]
        font-medium
        text-[#2C2016]
        "
      >
        Payment Method
      </h3>



      <div className="space-y-3">


        {
          options.map((item,index)=>{

            const Icon = item.icon;


            return (

              <label
                key={item.id}
                className={`
                flex
                items-start
                sm:items-center
                gap-3
                sm:gap-4
                rounded-xl
                border
                p-3
                sm:p-4
                cursor-pointer
                transition

                ${
                  paymentMethod === index
                  ?
                  "border-[#C6A27E] bg-[#FFF8F5]"
                  :
                  "border-[#E4DDD4] bg-white"
                }

                `}
              >


                <input
                  type="radio"
                  name="payment"
                  checked={
                    paymentMethod === index
                  }
                  onChange={() =>
                    setPaymentMethod(index)
                  }
                  className="
                  accent-[#8B5E3C]
                  mt-1
                  sm:mt-0
                  "
                />



                <div
                  className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#F5EDE4]
                  text-[#8B5E3C]
                  "
                >

                  <Icon size={20}/>

                </div>




                <div className="min-w-0">


                  <h4
                    className="
                    text-sm
                    font-medium
                    text-[#2C2016]
                    "
                  >
                    {item.title}
                  </h4>



                  <p
                    className="
                    mt-1
                    text-xs
                    text-[#9B8F84]
                    leading-5
                    "
                  >
                    {item.desc}
                  </p>


                </div>


              </label>

            )

          })
        }


      </div>


    </div>
  );
}