import { GetProduct } from "@/utils/GetAPI";
import ProductCard from "./ProductCard";

export default async function ProductGrid({category , room , material,min,max,stock,sort,status,page}) {const data = await GetProduct({
  category,
  room,
  material,
  min,
  max,
  stock,
  sort,
  status,
  page
});

const Product = data?.Product || [];
   
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-2
      xl:grid-cols-3
      gap-4
      sm:gap-5
      lg:gap-6
      ">
      {Product?.map((item) => (
        <ProductCard
          key={item._id}
          product={item}
        />
      ))}
    </div>
  );
}