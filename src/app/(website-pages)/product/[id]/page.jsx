import { notFound } from "next/navigation";
import axioscat from "@/utils/helper";

import ProductGallery from "@/components/websiteComponent/product/ProductGallery";
import ProductInfo from "@/components/websiteComponent/product/ProductInfo";
import ProductDescription from "@/components/websiteComponent/product/ProductDescription";
import ProductSpecification from "@/components/websiteComponent/product/ProductSpecification";
import DeliveryInfo from "@/components/websiteComponent/product/DeliveryInfo";
import SimilarProducts from "@/components/websiteComponent/product/SimilarProducts";

export default async function ProductPage({ params }) {
  const { id } = await params;
  console.log(id)

  let product = null;

  try {
    const response = await axioscat.get(`/product/get/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (response.data.success) {
      product = response.data.product;
    }
  } catch (error) {
    console.log("Product Fetch Error:", error.message);
  }

  if (!product) {
    notFound();
  }

  const discount =
    product.originalPrice > 0
      ? Math.round(
          ((product.originalPrice - product.salePrice) /
            product.originalPrice) *
            100
        )
      : 0;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500">
          Home
          <span className="mx-2">/</span>
          Furniture
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14">

          <ProductGallery product={product} />

          <ProductInfo
            product={product}
            discount={discount}
          />

        </div>
      </section>

      {/* Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <ProductDescription
          description={product.description}
        />

        <ProductSpecification
          product={product}
        />
         <SimilarProducts
        currentId={product._id}
          category={product.categroyID}
       />

        <DeliveryInfo />

      

      </section>

    </main>
  );
}