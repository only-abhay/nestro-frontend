import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="py-24 text-center">

      <h2 className="text-4xl font-semibold text-[#2c2016]">
        Your Cart is Empty
      </h2>

      <p className="mt-4 text-gray-500">
        Looks like you haven't added anything yet.
      </p>

      <Link
        href="/store"
        className="
          mt-8
          inline-flex
          h-12
          items-center
          justify-center
          rounded-full
          bg-[#2c2016]
          px-8
          text-white
          transition
          hover:bg-[#8b5e3c]
        "
      >
        Continue Shopping
      </Link>

    </div>
  );
}