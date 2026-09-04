export default function SettingToggle({
  enabled,
}) {

  return (

    <div
      className={`
      w-10
      h-[22px]
      rounded-full
      relative
      shrink-0

      ${
        enabled
        ? "bg-[#8B5E3C]"
        : "bg-[#E8E0D5]"
      }

      `}
    >

      <div
        className={`
        absolute
        top-[2px]
        w-[18px]
        h-[18px]
        bg-white
        rounded-full
        transition-all

        ${
          enabled
          ? "right-[2px]"
          : "left-[2px]"
        }

        `}
      />

    </div>

  );
}