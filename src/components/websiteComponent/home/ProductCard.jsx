import Link from "next/link";
import Addtocartbtn from "../store/Addtocartbtn";


export default function ProductCard({ product }) {
  return (
      <div
        style={{ height: "380px" }}
        className="
          group
          bg-white
          rounded-xl
          border
          border-[#EDE5DA]
          overflow-hidden
          hover:-translate-y-1
          hover:shadow-xl
          transition-all
          duration-300
          flex
          flex-col
        "
      >
        {/* Image */}
      {/* Image Section */}
<div
  style={{ height: "220px" }}
  className="relative shrink-0 bg-[#F5F0EB] flex items-center justify-center overflow-hidden"
>
               <Link href={`/product/${product._id}`}>
                  <img
    src={product.thumbnail || "/placeholder.png"}
    alt={product.name}
    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
  />
               </Link>


  {/* Best Seller Badge */}
  {product.bestSeller && (
    <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
      🔥 Best Seller
    </span>
  )}

  {/* Discount Badge */}
  {product.discount > 0 && (
    <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
      {product.discount}% OFF
    </span>
  )}

  {/* Old Add To Cart Button */}
  <Addtocartbtn product={product} />
</div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500 mb-1">
            {product.categroyID?.name}
          </p>

          <h3 className="font-semibold text-gray-900 line-clamp-2">
            {product.name}
          </h3>

          <div className="mt-2 flex items-center gap-1 text-yellow-500">
            ★★★★★
            <span className="ml-2 text-sm text-gray-500">
              ({product.rating || 5})
            </span>
          </div>

          <div className="mt-auto flex justify-between items-end">
            <div>
              <p className="text-xl font-bold text-gray-900">
                ₹{product.salePrice}
              </p>

              {product.originalPrice && (
                <p className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}