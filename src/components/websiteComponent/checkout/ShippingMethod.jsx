export default function ShippingMethod({
  shippingMethod,
  setShippingMethod
}) {


  const shippingOptions = [
    {
      id:"standard",
      title:"Standard Delivery",
      subtitle:"Delivered within 5-7 business days",
      price:"Free",
    },

    {
      id:"express",
      title:"Express Delivery",
      subtitle:"Delivered within 2-3 business days",
      price:"₹499",
    },
  ];



  return (
    <div>


      <h3
        className="
        mb-4
        text-[13px]
        font-medium
        text-[#2C2016]
        "
      >
        Shipping Method
      </h3>



      <div className="space-y-3">


        {
          shippingOptions.map((item,index)=>(


            <label
              key={item.id}
              className={`
              flex
              items-center
              gap-3
              rounded-lg
              border
              p-3
              sm:p-4
              cursor-pointer
              transition

              ${
                shippingMethod === index
                ?
                "border-[#8B5E3C] bg-[#FFF8F5]"
                :
                "border-[#E4DDD4] bg-white"
              }

              `}
            >


              <input
                type="radio"
                name="shipping"
                checked={
                  shippingMethod === index
                }
                onChange={() =>
                  setShippingMethod(index)
                }
                className="
                accent-[#8B5E3C]
                shrink-0
                "
              />



              <div className="flex-1 min-w-0">


                <div
                  className="
                  text-[12px]
                  font-medium
                  text-[#2C2016]
                  "
                >
                  {item.title}
                </div>


                <div
                  className="
                  text-[10px]
                  sm:text-xs
                  text-[#9B8F84]
                  "
                >
                  {item.subtitle}
                </div>


              </div>



              <div
                className="
                text-[12px]
                font-medium
                text-[#2C2016]
                shrink-0
                "
              >
                {item.price}
              </div>


            </label>


          ))
        }


      </div>


    </div>
  );
}