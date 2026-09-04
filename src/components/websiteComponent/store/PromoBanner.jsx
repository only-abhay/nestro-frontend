import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <div
      className="
      bg-[#2C2016]
      rounded-xl
      px-4
      sm:px-6
      py-5
      mt-6
      flex
      flex-col
      md:flex-row
      justify-between
      gap-4
      items-start
      md:items-center
    "
    >
      <div className="w-full md:w-auto">
        <p className="text-[#D6BFA7] text-xs">
          Limited Time Offer
        </p>

        <h3
          className="
          text-white
          text-base
          sm:text-lg
          mt-1
          leading-snug
          "
        >
          Free White Glove Delivery on orders above ₹75,000
        </h3>
      </div>

      <button
        className="
        bg-[#8B5E3C]
        text-white
        px-5
        py-2
        rounded
        w-full
        sm:w-auto
        shrink-0
        "
      >
        <span className="flex items-center justify-center gap-2">
          Shop Now
          <ArrowRight size={14} />
        </span>
      </button>
    </div>
  );
}