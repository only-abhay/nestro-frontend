export default function PasswordField({
  label,
}) {

  return (
    <div>

      <label
        className="
        text-[11px]
        block
        mb-1
        "
      >
        {label}
      </label>


      <input
        type="password"
        placeholder="••••••••"
        className="
        w-full
        px-3
        py-[9px]
        border
        border-[#E8E0D5]
        rounded-md
        "
      />

    </div>
  );
}