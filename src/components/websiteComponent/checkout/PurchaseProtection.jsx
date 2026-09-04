import { ShieldCheck } from "lucide-react";


export default function PurchaseProtection() {
  return (
    <div
      className="
      mt-4
      bg-white
      border
      border-[#E4DDD5]
      rounded-[10px]
      p-4
      "
    >


      <div
        className="
        flex
        items-center
        text-[11px]
        font-medium
        text-[#2F2A27]
        mb-2
        "
      >

        <ShieldCheck
          size={15}
          className="
          text-[#8B5E3C]
          mr-2
          shrink-0
          "
        />


        Purchase Protection


      </div>




      <p
        className="
        text-[10px]
        text-[#7B746F]
        leading-[1.7]
        "
      >
        5-year warranty · 30-day returns · Free assembly included ·
        Tracked delivery
      </p>


    </div>
  );
}