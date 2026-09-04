export default function CheckboxField({
  id,
  label,
  defaultChecked = false,
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        className="w-[15px] h-[15px]"
      />

      <label
        htmlFor={id}
        className="
        text-[11px]
        text-[#8B8680]
        leading-[1.6]
        "
      >
        {label}
      </label>
    </div>
  );
}