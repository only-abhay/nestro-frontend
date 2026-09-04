export default function SectionCard({
  children,
}) {

  return (
    <div
      className="
      bg-white
      border
      border-[#E8E0D5]
      rounded-xl
      p-4
      sm:p-[22px]
      "
    >
      {children}
    </div>
  );
}