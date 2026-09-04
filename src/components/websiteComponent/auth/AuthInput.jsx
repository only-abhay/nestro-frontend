export default function AuthInput({
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div className="mb-[14px]">
      <label className="block text-[11px] text-[#8E8781] mb-[5px] tracking-[0.04em]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          px-3
          py-[10px]
          text-[13px]
          bg-[#FAFAF9]
          border
          border-[#E4DDD5]
          rounded-md
          outline-none
          focus:border-[#C6A27E]
        "
      />
    </div>
  );
}