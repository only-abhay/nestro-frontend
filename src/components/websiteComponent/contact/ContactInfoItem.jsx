export default function ContactInfoItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex gap-3 items-start mb-5 last:mb-0">
      <div className="w-10 h-10 bg-[#F5EDE4] rounded-lg flex items-center justify-center shrink-0">
        <Icon
          size={18}
          className="text-[#8B5E3C]"
        />
      </div>

      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.12em] text-[#8F8F8F] mb-1">
          {label}
        </div>

        <div className="text-sm font-medium text-[#2C2016] break-words">
          {value}
        </div>
      </div>
    </div>
  );
}