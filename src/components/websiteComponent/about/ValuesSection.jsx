import { values } from "@/data/aboutData";
import ValueCard from "./ValueCard";

export default function ValuesSection() {
  return (
    <section className="px-3 sm:px-6 py-8">

      <div className="text-[#8B5E3C]">
        What drives us
      </div>


      <h2 className="text-2xl">
        Our Values
      </h2>


      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-[12px]
        sm:gap-[14px]
        mt-5
      "
      >

        {values.map((item) => (
          <ValueCard
            key={item.title}
            Icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}

      </div>

    </section>
  );
}