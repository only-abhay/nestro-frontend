"use client";

export default function Button({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        h-12
        w-full
        rounded-full
        bg-[#2c2016]
        text-white
        font-medium
        transition-all
        duration-300
        hover:bg-[#8b5e3c]
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}