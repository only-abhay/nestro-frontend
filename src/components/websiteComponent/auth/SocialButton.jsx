export default function SocialButton({
  icon,
  text,
}) {
  return (
    <button
      className="
      w-full
      flex
      items-center
      justify-center
      gap-2
      py-[10px]
      px-4
      text-[12px]
      text-[#5B5753]
      bg-white
      border
      border-[#E5DDD5]
      rounded-[6px]
      mb-2
      "
    >
      {icon}
      {text}
    </button>
  );
}