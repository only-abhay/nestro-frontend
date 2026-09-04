import {milestones} from "@/data/aboutData.js";

export default function Milestones() {
  return (
    <section className="px-3 sm:px-6 py-8">

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        overflow-hidden
        rounded-xl
        border
        border-[#E5DDD3]
      "
      >

        {milestones.map((item, index) => (
          <div
            key={item.label}
            className={`
            bg-white
            px-4
            sm:px-6
            py-5
            sm:py-6
            text-center
            border-[#E5DDD3]

            ${
              index % 2 === 0
              ? "border-r"
              : ""
            }

            ${
              index < milestones.length - 2
              ? "border-b md:border-b-0"
              : ""
            }

            ${
              index === 1
              ? "md:border-r"
              : ""
            }

            ${
              index === 2
              ? "md:border-r"
              : ""
            }
            `}
          >

            <h3
              className="
              text-[24px]
              sm:text-[28px]
              font-medium
              text-[#8B5E3C]
              mb-1
            "
            >
              {item.number}
            </h3>


            <p
              className="
              text-[11px]
              text-[#8C837A]
            "
            >
              {item.label}
            </p>


          </div>
        ))}

      </div>

    </section>
  );
}