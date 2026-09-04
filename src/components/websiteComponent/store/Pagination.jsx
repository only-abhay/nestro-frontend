"use client"
import { GetProduct } from "@/utils/GetAPI";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams, useRouter } from 'next/navigation'


export default function Pagination({ Product }) {

  const page = Product?.pages || 1;
  const PagesNum = Array.from({ length: page }, (_, i) => i + 1);

  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams.get("page") || 1)

  function PagesCheck(page) {
    const Pagesparams = new URLSearchParams(searchParams.toString());

    Pagesparams.set("page", page)

    router.push(`?${Pagesparams.toString()}`, {
      scroll: false,
    });


  }







  return (
    <section className="py-14 px-4 flex flex-col items-center gap-8">

      {/* Pagination */}
      <div className="flex items-center gap-3 flex-wrap justify-center">

        {/* Previous */}
        <button
          className="
          w-11 h-11
          rounded-full
          border
          border-gray-300
          flex
          items-center
          justify-center
          text-gray-500
          hover:border-[#8B5E3C]
          hover:text-[#8B5E3C]
          transition-all
          duration-300
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
          disabled={currentPage === 1}
        >
          <ChevronLeft size={30} />
        </button>

        {/* Pages */}
        {PagesNum.map((page) => (

          <button
            onClick={() => PagesCheck(page)}
            key={page}
            className={`
              w-10
              h-10
              rounded-full
              text-sm
              font-medium
              transition-all
              duration-300
              ${page === currentPage
                ? "bg-[#8B5E3C] text-white shadow-lg scale-110"
                : "border border-gray-300 text-gray-700 hover:border-[#8B5E3C] hover:text-[#8B5E3C] hover:-translate-y-0.5"
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          className="
          w-11
          h-11
          rounded-full
          border
          border-gray-300
          flex
          items-center
          justify-center
          text-gray-500
          hover:border-[#8B5E3C]
          hover:text-[#8B5E3C]
          transition-all
          duration-300
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
          disabled={currentPage === page}
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );
}