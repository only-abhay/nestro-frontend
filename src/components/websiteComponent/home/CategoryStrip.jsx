import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GetCategoryData } from "@/utils/GetAPI";

export default async function Categories() {
  const { categories } = await GetCategoryData();


  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[3px] text-[#B88E63]">
            Browse Collection
          </span>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#2C2016]">
            Shop by Category
          </h2>
        </div>

        {/* Categories */}
       <div
  className="
    grid
    grid-cols-2
    sm:grid-cols-4
    md:grid-cols-6
    lg:grid-cols-8
    gap-2
  "
>
  {categories.map((item) => (
    <Link
      key={item._id}
      href={`/store?category=${item.slug}`}
      className="
        group
        rounded-lg
        border
        border-[#E8E0D5]
        bg-white
        p-2
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Image */}
      <div className="mx-auto h-12 w-12 overflow-hidden rounded-full bg-[#F7F4EF]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Name */}
      <h3 className="mt-2 truncate text-center text-[11px] font-medium text-[#2C2016]">
        {item.name}
      </h3>

      {/* Arrow */}
      <div className="mt-1 flex justify-center">
        <ArrowRight
          size={12}
          className="text-[#8B5E3C] transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
}