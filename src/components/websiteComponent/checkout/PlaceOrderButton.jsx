"use client";

import { ArrowRight, Loader2 } from "lucide-react";

import { useDispatch } from "react-redux";

import { emptycart } from "@/redux/features/cartSlice";

import { useRouter } from "next/navigation";

import axiosCat from "@/utils/helper";

import { toast } from "sonner";

import { useRazorpay } from "react-razorpay";

import { v4 as uuidv4 } from "uuid";

import { useRef, useState } from "react";

import { io } from "socket.io-client";

import {useEffect} from "react"



export default function PlaceOrderButton({
  paymentMethod,
  selectedAddress,
  shippingMethod,
}) {
  const { Razorpay } = useRazorpay();

  const router = useRouter();

  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);

    const[socket, setSocket] = useState(null);

  const idempotencyKeyRef = useRef(null);

  useEffect(()=>{
  if(socket == null){
     const newSocket = io('http://localhost:5000');
  setSocket(newSocket);
  }
},
[])


function  GetOrderDetailOnAdmin(orderId){
   socket.emit("orderPlaced",orderId)
}

  const OrderHandler = async () => {
    if (isSubmitting) return;

    if (paymentMethod === null || paymentMethod === undefined) {
      return toast.error("Please select a payment method.");
    }

    if (!selectedAddress) {
      return toast.error("Please select a shipping address.");
    }

    if (!idempotencyKeyRef.current) {
      idempotencyKeyRef.current = uuidv4();
    }

    setIsSubmitting(true);

    try {
      const response = await axiosCat.post(
        "/order/create-order",
        {
          paymentMethod,
          shippingAddress: selectedAddress,
          shippingMethod,
        },
        {
          headers: {
            "Idempotency-Key": idempotencyKeyRef.current,
          },
        },
      );

      if (response.data.success) {
        if (paymentMethod === 0) {
          dispatch(emptycart());

          localStorage.removeItem("cart");

          toast.success(response.data.message);

          router.push(`/order-success?orderId=${response.data.orderId}`);
           
          GetOrderDetailOnAdmin(response.data.orderId)

          idempotencyKeyRef.current = null;
        } else {
          const { order_id, razorpay_order_id } = response.data;

          razorpaypopup(razorpay_order_id, order_id);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong.");

      setIsSubmitting(false);
    }
  };

  const razorpaypopup = (razorpay_order_id, order_id) => {
    try {
      const options = {
        key: process.env.NEXT_PUBLIC_ROZARPAY_KEY_ID,

        currency: "INR",

        name: "Nestro",

        description: "Test Transaction",

        order_id: razorpay_order_id,

        handler: (response) => {
          const rozarpay_response = {
            razorpay_order_id: response.razorpay_order_id,

            razorpay_payment_id: response.razorpay_payment_id,

            razorpay_signature: response.razorpay_signature,
          };

          axiosCat
            .post("/order/verify-payment", {
              rozarpay_response,
              order_id,
            })

            .then((res) => {
              if (res.data.success) {
                dispatch(emptycart());

                localStorage.removeItem("cart");

                toast.success("Payment successful!");

                router.push(`/order-success?orderId=${order_id}`);
          GetOrderDetailOnAdmin(order_id)


                idempotencyKeyRef.current = null;
              }
            })

            .catch(() => {
              toast.error("Payment verification failed.");
            })

            .finally(() => {
              setIsSubmitting(false);
            });
        },

        theme: {
          color: "#2c2016",
        },

        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
          },
        },
      };

      const razorpayInstance = new Razorpay(options);

      razorpayInstance.open();

      razorpayInstance.on("payment.failed", () => {
        toast.error("Payment Failed!");

        setIsSubmitting(false);
      });
    } catch (error) {
      console.error(error);

      setIsSubmitting(false);
    }
  };

  const isCOD = paymentMethod === 0;

  return (
    <button
      onClick={OrderHandler}
      disabled={isSubmitting}
      className="
      w-full
      flex
      justify-center
      items-center
      gap-2
      bg-[#8B5E3C]
      text-white
      py-3.5
      text-sm
      rounded-lg
      mt-4
      hover:bg-[#744A2D]
      transition
      disabled:opacity-50
      disabled:cursor-not-allowed
      "
    >
      {isSubmitting ? (
        <>
          <Loader2 size={17} className="animate-spin" />
          Processing...
        </>
      ) : (
        <>
          {isCOD ? "Place Order" : "Proceed to Pay"}

          <ArrowRight size={16} />
        </>
      )}
    </button>
  );
}
