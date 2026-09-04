export default function AuthFeature({
  icon: Icon,
  text,
}) {
  return (
    <div className="flex items-center gap-[10px] mb-[14px] w-full max-w-[240px]">
      <div
        className="
          w-7
          h-7
          rounded-[6px]
          bg-[rgba(198,162,126,0.15)]
          flex
          items-center
          justify-center
        "
      >
        <Icon
          size={14}
          className="text-[#C6A27E]"
        />
      </div>

      <p className="text-[11px] leading-[1.5] text-white/55">
        {text}
      </p>
    </div>
  );
}