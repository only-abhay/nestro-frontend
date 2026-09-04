import { GetProduct } from "@/utils/GetAPI";
import BestSellerSlider from "./BestSellerSlider";

export default async function BestSellers() {

  let products = [];

  try {
    const { Product } = await GetProduct({
      bestSeller: "true",
      limit: 10,
    });

    products = Product || [];

  } catch (error) {
    console.log("Best Seller Error:", error);
  }


  if (!products.length) return null;


  return (
    <section className="py-12 sm:py-16">

      <div className="container mx-auto px-4 sm:px-6">

        <div className="flex justify-between items-end mb-8">

          <div>

            <span className="
              text-[#c6a27e]
              text-xs
              sm:text-sm
              tracking-[0.2em]
              uppercase
            ">
              Handpicked for you
            </span>


            <h2 className="
              mt-2
              text-2xl
              sm:text-3xl
              font-semibold
              text-gray-900
            ">
              Best Sellers
            </h2>

          </div>


        </div>


        <BestSellerSlider products={products} />

      </div>

    </section>
  );
}