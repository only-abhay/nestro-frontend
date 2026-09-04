export default function AuthTerms({
  text,
  actionText,
  onClick,
}) {
  return (
    <div
      className="
      text-center
      text-[10px]
      text-[#8B8680]
      leading-[1.6]
      mt-[14px]
      "
    >
      {text}{" "}
      <button
        type="button"
        onClick={onClick}
        className="text-[#8B5E3C]"
      >
        {actionText}
      </button>
    </div>
  );
}