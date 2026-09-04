"use client";

import { Eye } from "lucide-react";

export default function PasswordInput({
  placeholder,
}) {
  return (
    <div className="mb-[14px]">
      <label className="block text-[11px] text-[#8E8781] mb-[5px]">
        Password
      </label>

      <div className="relative">

        <input
          type="password"
          placeholder={placeholder}
          className="
            w-full
            px-3
            py-[10px]
            pr-9
            bg-[#FAFAF9]
            border
            border-[#E4DDD5]
            rounded-md
            text-[13px]
            outline-none
          "
        />

        <Eye
          size={15}
          className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#8E8781] cursor-pointer"
        />

      </div>
    </div>
  );
}