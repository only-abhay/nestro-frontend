import Link from "next/link";

export default function CartFooter() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8DED5] pt-6">

      <Link
        href="/store"
        className="
          rounded-full
          border
          border-[#2c2016]
          px-6
          py-3
          text-[#2c2016]
          transition
          hover:bg-[#2c2016]
          hover:text-white
        "
      >
        Continue Shopping
      </Link>

      <button
        className="
          rounded-full
          bg-[#2c2016]
          px-6
          py-3
          text-white
          transition
          hover:bg-[#8b5e3c]
        "
      >
        Update Cart
      </button>

    </div>
  );
}