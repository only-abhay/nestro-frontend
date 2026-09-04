export default function CartStepper() {
  return (
    <div className="flex items-center flex-wrap gap-3 text-[17px]">

      <div className="flex items-center gap-3">
        <span className="font-semibold text-[#2c2016]">
          1. Cart
        </span>

        <div className="w-12 h-px bg-[#CFC5BC]" />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-500">
          2. Checkout
        </span>

        <div className="w-12 h-px bg-[#CFC5BC]" />
      </div>

      <span className="text-gray-500">
        3. Payment
      </span>

    </div>
  );
}