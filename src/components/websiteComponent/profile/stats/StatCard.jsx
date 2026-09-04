export default function StatCard({
  number,
  label,
}) {

  return (
    <div
      className="
      bg-[#FAF8F5]
      rounded-lg
      p-3
      sm:p-[14px]
      text-center
      min-w-0
      "
    >

      <div
        className="
        text-lg
        sm:text-[20px]
        font-medium
        text-[#8B5E3C]
        mb-1
        truncate
        "
      >
        {number}
      </div>


      <div
        className="
        text-[10px]
        text-[#8A8178]
        tracking-[0.04em]
        "
      >
        {label}
      </div>

    </div>
  );
}