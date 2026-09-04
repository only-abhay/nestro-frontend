"use client"

import { ArrowUpDown, ChevronDown } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SortBar() {
const searchParams = useSearchParams();

const sortby = searchParams.get("sort") || "featured";

const [sort,setSort] = useState(sortby);
const router = useRouter()


  function handleSortChange(value) {

    setSort(value);

    const params = new URLSearchParams(
      searchParams.toString()
    );


    if(value === "featured"){
      params.delete("sort");
    }
    else{
      params.set("sort", value);
    }


    router.push(
      `/store?${params.toString()}`,
      {
        scroll:false
      }
    );
  }


  return (
    <div className="mb-8">
      <div
        className="
          flex
          justify-end

          rounded-2xl
          bg-gradient-to-r
          from-[#FFFDFB]
          via-white
          to-[#FAF7F3]

          p-5

          shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            group
            flex
            items-center
            gap-3

            rounded-2xl
            border
            border-[#E7DED3]

            bg-white

            px-4
            py-2

            hover:border-[#8B5E3C]
            hover:shadow-lg
          "
        >

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-xl
              bg-[#F8F3EE]

              text-[#8B5E3C]
            "
          >
            <ArrowUpDown size={18}/>
          </div>


          <div className="relative">

            <select

              value={sort}

              onChange={(e)=>
                handleSortChange(e.target.value)
              }

              className="
                appearance-none
                bg-transparent

                pr-8

                text-sm
                font-medium

                text-[#3B2C20]

                outline-none
                cursor-pointer
              "
            >

              <option value="featured">
                Featured
              </option>

              <option value="asc">
                Price: Low → High
              </option>

              <option value="desc">
                Price: High → Low
              </option>

              <option value="newest">
                Newest First
              </option>


            </select>


            <ChevronDown
              size={18}
              className="
                pointer-events-none
                absolute
                right-0
                top-1/2
                -translate-y-1/2

                text-[#8B5E3C]

                transition-transform
                group-hover:rotate-180
              "
            />

          </div>

        </div>

      </div>
    </div>
  );
}