export default function SectionTitle({
  children,
}) {

  return (
    <h3
      className="
      text-xs
      sm:text-[13px]
      font-medium
      text-[#2B2B2B]
      pb-3
      mb-4
      border-b
      border-[#E8E0D5]
      "
    >
      {children}
    </h3>
  );
}