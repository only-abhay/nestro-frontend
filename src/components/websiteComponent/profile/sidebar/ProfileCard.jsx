export default function ProfileCard({
  user
}) {

  return (
    <div
      className="
      bg-white
      border
      border-[#E8E0D5]
      rounded-xl
      p-5
      sm:p-6
      text-center
      "
    >

      <div
        className="
        w-[72px]
        h-[72px]
        rounded-full
        bg-[#F0EBE3]
        mx-auto
        mb-3
        flex
        items-center
        justify-center
        text-[22px]
        font-medium
        text-[#8B5E3C]
        "
      >
        RK
      </div>


      <h3
        className="
        text-[15px]
        font-medium
        text-[#2B2B2B]
        mb-1
        break-words
        "
      >
        {user?.name}
      </h3>


      <p
        className="
        text-[11px]
        text-[#8A8178]
        mb-4
        break-all
        "
      >
        {user?.email}
      </p>


      <span
        className="
        bg-[#F5EDE4]
        text-[#8B5E3C]
        text-[10px]
        px-3
        py-1
        rounded-full
        tracking-[0.08em]
        "
      >
        Gold Member
      </span>

    </div>
  );
}