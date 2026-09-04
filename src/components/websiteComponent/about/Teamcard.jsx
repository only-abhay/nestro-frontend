export default function TeamCard({
  initials,
  name,
  role,
}) {
  return (
    <div
      className="
      bg-white
      border
      border-[#E5DDD3]
      rounded-xl
      overflow-hidden
    "
    >

      <div
        className="
        h-[100px]
        sm:h-[120px]
        bg-[#F0EBE3]
        flex
        items-center
        justify-center
        text-[28px]
        sm:text-[32px]
        text-[#8B5E3C]
      "
      >
        {initials}
      </div>


      <div
        className="
        p-3
        sm:p-[14px]
      "
      >

        <h3
          className="
          text-[12px]
          font-medium
          text-[#2C2016]
          truncate
        "
        >
          {name}
        </h3>


        <p
          className="
          text-[10px]
          text-[#8C837A]
          mt-[2px]
          truncate
        "
        >
          {role}
        </p>


      </div>

    </div>
  );
}