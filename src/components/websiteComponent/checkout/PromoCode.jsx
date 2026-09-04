export default function PromoCode() {
  return (
    <>

      <div
        className="
        flex
        flex-col
        sm:flex-row
        gap-2
        mb-4
        "
      >

        <input
          defaultValue="Nestro15"
          placeholder="Promo / gift code"
          className="
          flex-1
          px-3
          py-3
          text-xs
          border
          border-[#E4DDD5]
          rounded-md
          bg-white
          outline-none
          focus:border-[#8B5E3C]
          transition
          "
        />


        <button
          className="
          bg-[#1F1A17]
          text-[#C6A27E]
          text-[11px]
          px-5
          py-3
          rounded-md
          hover:bg-black
          transition
          "
        >
          Apply
        </button>


      </div>




      <div
        className="
        bg-[#EAF3DE]
        rounded-lg
        px-4
        py-3
        flex
        items-start
        sm:items-center
        gap-2
        text-[11px]
        text-[#3B6D11]
        leading-5
        "
      >

        <span>
          ✓
        </span>

        <span>
          Code applied. You save ₹25,650!
        </span>


      </div>


    </>
  );
}