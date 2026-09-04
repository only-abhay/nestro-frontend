export default function AboutHero() {
  return (
    <section
      className="
      bg-[#1F1915]
      mx-3
      sm:mx-6
      mt-5
      rounded-[14px]
      px-5
      sm:px-8
      md:px-14
      py-10
      sm:py-12
      md:py-14
      grid
      grid-cols-1
      md:grid-cols-2
      gap-8
      md:gap-10
      items-center
    "
    >
      <div>
        <h1
          className="
          text-[28px]
          sm:text-[32px]
          md:text-[36px]
          leading-[1.2]
          tracking-[-0.02em]
          text-[#FAF7F4]
          font-normal
          mb-[14px]
        "
        >
          Furniture crafted with{" "}
          <em className="italic text-[#D6BFA7]">
            purpose
          </em>
        </h1>

        <p
          className="
          text-[13px]
          leading-[1.75]
          text-white/50
          max-w-full
        "
        >
          Founded in 2018, Nestro was born from a belief that beautiful
          furniture shouldn't be a luxury. We work directly with master
          craftsmen across India and Scandinavia to bring you pieces that are
          honest in material, thoughtful in design, and built to outlast trends.
        </p>
      </div>

      <div 
        className="
        flex 
        items-center 
        justify-center
        w-full
      "
      >
        {/* SVG EXACTLY PASTE HERE */}
      </div>
    </section>
  );
}