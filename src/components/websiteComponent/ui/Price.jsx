export default function Price({
  price,
  oldPrice,
}) {
  return (
    <div className="flex items-center gap-2">

      <span className="text-3xl font-semibold text-[#2c2016]">
        ₹ 
        {price}
      </span>

      {oldPrice && (
        <span className="text-gray-400 line-through">
          ₹ {oldPrice}
        </span>
      )}

    </div>
  );
}