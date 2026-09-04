import { Package } from "lucide-react";
import OrderStatus from "./OrderStatus";


export default function OrderRow({
  order
}) {

  return (

    order.product_detail.map((product) => (

      <div
        key={product._id}
        className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        gap-4
        py-4
        border-b
        border-[#E8E0D5]
        "
      >


        {/* Icon */}

        <div
          className="
          w-12
          h-12
          rounded-lg
          bg-[#F5F0EB]
          flex
          items-center
          justify-center
          shrink-0
          "
        >

          <Package
            className="
            w-5
            h-5
            text-[#8B5E3C]
            "
          />

        </div>



        {/* Product Info */}

        <div
          className="
          flex-1
          min-w-0
          "
        >

          <h4
            className="
            text-sm
            font-semibold
            truncate
            "
          >
            {product.name}
          </h4>


          <p className="text-xs text-[#8A8178] break-all">
            Order ID : {order._id}
          </p>


          <p className="text-xs text-[#8A8178]">
            Qty : {product.qty}
          </p>


          <p className="text-xs text-[#8A8178]">
            Payment :
            {" "}
            {
              order.payment_mode === 0
              ? "Prepaid"
              : "COD"
            }
          </p>


          <p className="text-xs text-[#8A8178]">
            {
              new Date(
                order.createdAt
              ).toLocaleDateString()
            }
          </p>


        </div>




        {/* Status */}

        <div
          className="
          sm:ml-auto
          "
        >

          <OrderStatus
            status={order.order_status}
          />

        </div>



        {/* Price */}

        <div
          className="
          font-semibold
          text-sm
          sm:text-base
          "
        >

          ₹
          {product.price.toLocaleString()}

        </div>



      </div>

    ))

  );
}