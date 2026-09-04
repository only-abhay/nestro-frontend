"use client";

import CartItemCard from "./CartItemCard";


export default function CartItems({items}) {

  return (
    <div className="space-y-10">

      {items.map((item) => (
        <CartItemCard
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
}