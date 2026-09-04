export default function PrimaryButton({
  children,
}) {

  return (
    <button
      className="
      bg-[#8B5E3C]
      text-white
      px-5
      py-2.5
      rounded-md
      text-xs
      w-full
      sm:w-auto
      "
    >
      {children}
    </button>
  );
}