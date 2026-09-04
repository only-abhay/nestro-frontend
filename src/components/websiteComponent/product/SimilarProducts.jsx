import axiosCat from "@/utils/helper";
import ProductCard from "../store/ProductCard";


export default async function SimilarProducts({
  category,
  currentId
}) {


  let products = [];



  try {


    const res = await axiosCat.get(
      "/product/get"
    );



    products = (res.data.Product || [])
      .filter(
        (item) => item.featured === true
      )
      .filter(
        (item) => item._id !== currentId
      )
      .slice(0,4);



  } catch(error){


    console.log(
      "Similar Product Error:",
      error.message
    );


  }





  if(!products.length) return null;





  return (


    <section
      className="
      mt-16
      sm:mt-20
      "
    >




      {/* Section Header */}

      <div
        className="
        mb-8
        "
      >

        <h2
          className="
          text-2xl
          sm:text-3xl
          font-bold
          tracking-tight
          text-slate-900
          "
        >

          You May Also Like

        </h2>


        <p
          className="
          mt-2
          text-sm
          sm:text-base
          text-slate-500
          "
        >

          Explore more featured products you may love

        </p>


      </div>







      {/* Product Grid */}

      <div
        className="
        grid

        grid-cols-1

        sm:grid-cols-3

        lg:grid-cols-4

        gap-4

        sm:gap-6
        "
      >



        {
          products.map((product,index)=>(


            <div

              key={product._id}

              className="
              animate-in
              fade-in
              slide-in-from-bottom-5
              duration-500
              "

              style={{
                animationDelay:`${index * 100}ms`
              }}

            >


              <ProductCard
                product={product}
              />


            </div>


          ))
        }



      </div>





    </section>


  );

}