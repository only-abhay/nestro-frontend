import Link from "next/link";


export default function ProfileNavItem({
  icon: Icon,
  label,
  active,
  onClick,
}) {

  const href =
    label === "Sign Out"
      ? "/auth"
      : "/profile";


  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`
        w-full
        flex
        items-center
        justify-center
        lg:justify-start
        gap-[10px]
        px-[14px]
        py-[10px]
        rounded-lg
        text-[12px]
        font-medium
        transition

        ${
          active
          ? "bg-[#F5EDE4] text-[#8B5E3C]"
          : "text-[#5E564F] hover:bg-[#F5EDE4]"
        }

        `}
      >

        <Icon size={15}/>

        <span>
          {label}
        </span>

      </button>
    </Link>
  );
}