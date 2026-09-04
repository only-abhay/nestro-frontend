import { ArrowRight } from "lucide-react";

export default function StoreHero() {
  return (
    <section
      className="
        relative
        mx-4
        sm:mx-6
        my-5
        overflow-hidden
        rounded-3xl
        bg-[#2C2016]
        min-h-[520px]
      "
    >

      {/* Background Luxury Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#2C2016]
          via-[#2C2016]
          to-[#4A321E]
        "
      />


      {/* Right Image */}
      <div
        className="
          absolute
          inset-y-0
          right-0
          w-full
          lg:w-[58%]
        "
      >

        <img
          src="/images/hero.store.jpg"
          alt="Luxury Furniture"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />


        {/* Image Fade Left */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#2C2016]
            via-[#2C2016]/70
            via-35%
            to-transparent
          "
        />


        {/* Image Bottom Shade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#2C2016]/60
            via-transparent
            to-transparent
          "
        />

      </div>



      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          min-h-[520px]
        "
      >

        <div
          className="
            max-w-xl
            px-8
            sm:px-12
            lg:px-16
            py-16
          "
        >

          <span
            className="
              uppercase
              tracking-[5px]
              text-[#C6A27E]
              text-[11px]
              font-medium
            "
          >
            New Collection — SS 2026
          </span>



          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              lg:text-6xl
              leading-[1.05]
              font-light
              text-white
            "
          >
            Modern Living
            <br />

            <span
              className="
                italic
                text-[#C6A27E]
              "
            >
              Collection
            </span>

          </h1>



          <p
            className="
              mt-6
              max-w-md
              text-sm
              sm:text-base
              leading-7
              text-white
            "
          >
            Timeless furniture crafted for elegant spaces.
            Designed with intention, built to endure.
            Discover premium furniture that transforms every room.
          </p>



          <button
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#8B5E3C]
              px-7
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#734c2f]
              hover:-translate-y-1
            "
          >
            Explore Collection
            <ArrowRight size={18}/>
          </button>


        </div>

      </div>


    </section>
  );
}