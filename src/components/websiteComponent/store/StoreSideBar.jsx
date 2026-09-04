"use client";

import { GetCategoryData, GetMaterial, GetRoomData } from "@/utils/GetAPI";
import { useEffect, useState } from "react";
import SideBarOpt from "./SideBarOpt";
import PriceRange from "./PriceRange";
import Instock from "./Instock";

export default function StoreSidebar() {
  const [toggle, setToggle] = useState(false);
  const [room, setRooms] = useState([]);
  const [material, setMaterial] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await Promise.all([
          GetCategoryData(),
          GetRoomData(),
          GetMaterial(),
        ]);

        setCategory(response[0]?.categories || []);
        setRooms(response[1]?.Room || []);
        setMaterial(response[2]?.material || []);
      } catch (error) {
        console.log("Sidebar Data Error:", error);
      }
    };

    loadData();
  }, []);

  function ToggleHandler() {
    setToggle((prev) => !prev);
  }

  return (
    <aside
      className="
        w-full
        lg:w-[230px]
        shrink-0
        bg-white
        rounded-[12px]
        border-[0.5px]
        border-[#E8E0D5]
        p-[18px]
        sm:p-[22px]
        lg:sticky
        lg:top-[72px]
      "
    >
      {/* HEADER */}
      <div
        onClick={ToggleHandler}
        className="
          text-[10px]
          tracking-[0.18em]
          uppercase
          text-[#6B7280]
          mb-[18px]
          font-medium
          cursor-pointer
        "
      >
        Filters
      </div>

      {/* CONTENT WRAPPER (TOGGLE + DESKTOP ALWAYS SHOW) */}
      <div className={`${toggle ? "block" : "hidden"} lg:block`}>

        {/* ================= ROOM TYPE ================= */}
      <SideBarOpt Option = {room} name = {"Room"} querykey={"room"} />

        <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

        {/* ================= Category TYPE ================= */}

       
      <SideBarOpt Option = {category} name = {"Category"} querykey={"category"}  />

        <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />


        {/* ================= MATERIAL ================= */}
          <SideBarOpt Option = {material} name = {"Material"} querykey={"material"} />

        <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

          {/* ================= PRICE ================= */}
      <PriceRange/>

        <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

        {/* ================= COLOR ================= */}
        <div className="mb-[22px]">
          <div className="text-[12px] font-medium mb-[11px]">
            Color
          </div>

          <div className="flex flex-wrap gap-[8px]">
            <div className="w-[22px] h-[22px] rounded-full border-2 border-[#8B5E3C] bg-[#F5F0EB]" />
            <div className="w-[22px] h-[22px] rounded-full bg-[#2C2016]" />
            <div className="w-[22px] h-[22px] rounded-full bg-[#8B5E3C]" />
            <div className="w-[22px] h-[22px] rounded-full bg-[#6B7B8D]" />
            <div className="w-[22px] h-[22px] rounded-full bg-[#C4A882]" />
          </div>
        </div>

        <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

        {/* ================= AVAILABILITY ================= */}
      <Instock/>
      </div>
    </aside>
  );
}