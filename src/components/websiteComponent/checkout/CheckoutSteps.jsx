import { Check } from "lucide-react";


export default function CheckoutSteps() {


  const steps = [
    {
      title:"Cart",
      status:"done"
    },
    {
      title:"Delivery",
      status:"active",
      number:2
    },
    {
      title:"Payment",
      number:3
    },
    {
      title:"Review",
      number:4
    }
  ];



  return (
    <div
      className="
      mb-7
      flex
      items-center
      gap-2
      overflow-x-auto
      pb-2
      scrollbar-hide
      "
    >


      {
        steps.map((item,index)=>(

          <div
            key={item.title}
            className="
            flex
            items-center
            gap-2
            shrink-0
            "
          >


            <div
              className={`
              flex
              items-center
              gap-1.5
              text-[11px]

              ${
                item.status==="active"
                ?
                "text-[#8B5E3C]"
                :
                item.status==="done"
                ?
                "text-[#C6A27E]"
                :
                "text-[#9B8F84]"
              }
              `}
            >


              <div
                className={`
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                text-white

                ${
                  item.status==="active"
                  ?
                  "bg-[#8B5E3C]"
                  :
                  item.status==="done"
                  ?
                  "bg-[#C6A27E]"
                  :
                  "bg-[#E4DDD4] text-[#9B8F84]"
                }
                `}
              >

                {
                  item.status==="done"
                  ?
                  <Check size={10}/>
                  :
                  item.number
                }


              </div>


              {item.title}


            </div>



            {
              index !== steps.length - 1 &&
              <div
                className="
                h-px
                w-5
                sm:w-7
                bg-[#E4DDD4]
                "
              />
            }



          </div>

        ))
      }


    </div>
  );
}