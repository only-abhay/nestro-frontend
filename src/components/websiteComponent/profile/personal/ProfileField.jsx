export default function ProfileField({
  label,
  ...props
}) {

  return (
    <div>

      <label
        className="
        text-[11px]
        text-[#8A8178]
        block
        mb-[5px]
        "
      >
        {label}
      </label>


      <input
        {...props}
        className="
        w-full
        px-3
        py-[9px]
        border
        border-[#E8E0D5]
        rounded-md
        text-xs
        bg-[#FAF8F5]
        "
      />

    </div>
  );
}