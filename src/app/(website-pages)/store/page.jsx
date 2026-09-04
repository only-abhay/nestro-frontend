import StoreHero from "@/components/websiteComponent/store/StoreHero";
import StoreSidebar from "@/components/websiteComponent/store/StoreSideBar";
import SortBar from "@/components/websiteComponent/store/SortBar";
import ProductGrid from "@/components/websiteComponent/store/ProductGrid";
import PromoBanner from "@/components/websiteComponent/store/PromoBanner";
import Pagination from "@/components/websiteComponent/store/Pagination";
import { GetProduct } from "@/utils/GetAPI";

export default async function StorePage({searchParams}) {
   const Product = await GetProduct();
 
  const params = await searchParams

  const Category = params.category || null
  const Room = params.room || null
  const Material = params.material || null
  const Min = params.min || null
  const Max = params.max || null
  const stock = params.stock || null
  const sort = params.sort || null
  const page = params.page || 1

  return (
    <>
      <StoreHero />

      <section className="px-4 md:px-6 py-5">
        <div className="flex flex-col lg:flex-row gap-5 items-start">

          <StoreSidebar   />

          <div className="flex-1 mx-auto min-w-0">
            <SortBar />

            <ProductGrid category={Category} room = {Room} material = {Material} min =  {Min} max = {Max} stock={stock} sort={sort} status={true} page={page}/>

            <PromoBanner />

            <Pagination  Product={Product} />
          </div>

        </div>
      </section>
    </>
  );
}