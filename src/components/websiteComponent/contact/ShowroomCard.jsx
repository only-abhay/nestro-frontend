export default function ShowroomCard({
  city,
  address,
  hours,
}) {
  return (
    <div className="bg-white border border-[#E7DED3] rounded-xl p-4 h-full">
      <h4 className="text-sm font-medium text-[#2C2016] mb-2">
        {city}
      </h4>

      <p className="text-xs text-[#8F8F8F] leading-6 mb-3">
        {address}
      </p>

      <span className="text-xs text-[#8B5E3C] font-medium">
        {hours}
      </span>
    </div>
  );
}