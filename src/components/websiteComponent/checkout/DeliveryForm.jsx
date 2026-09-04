"use client";

import { useEffect } from "react";
import { Plus, MapPin, Phone } from "lucide-react";

export default function DeliveryForm({
  addresses = [],
  selectedAddress,
  setSelectedAddress,
  onAddAddress,
}) {


  useEffect(() => {

    if (!addresses.length) return;


    const defaultIndex = addresses.findIndex(
      (item) => item.isDefault
    );


    if (defaultIndex !== -1) {
      setSelectedAddress(defaultIndex);
    } else {
      setSelectedAddress(0);
    }

  }, [addresses, setSelectedAddress]);



  return (
    <div className="space-y-5">


      {/* Header */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        justify-between
        gap-3
        "
      >

        <h3
          className="
          text-base
          sm:text-lg
          font-semibold
          text-slate-900
          "
        >
          Delivery Address
        </h3>



        <button
          onClick={onAddAddress}
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-slate-300
          bg-white
          px-4
          py-2.5
          text-sm
          font-medium
          hover:bg-slate-50
          transition
          w-full
          sm:w-auto
          "
        >

          <Plus size={16}/>

          Add Address

        </button>


      </div>





      {/* Empty State */}


      {
        addresses.length === 0 && (

          <div
            className="
            rounded-xl
            border-2
            border-dashed
            border-slate-300
            py-10
            sm:py-12
            text-center
            px-4
            "
          >

            <MapPin
              size={42}
              className="mx-auto text-slate-400"
            />


            <h4 className="mt-4 font-semibold">
              No Address Found
            </h4>


            <p className="
            mt-1
            text-sm
            text-slate-500
            ">
              Please add a delivery address.
            </p>



            <button
              onClick={onAddAddress}
              className="
              mt-5
              rounded-lg
              bg-slate-900
              px-5
              py-3
              text-white
              text-sm
              "
            >
              Add Address
            </button>


          </div>

        )
      }





      {/* Address List */}


      <div className="space-y-4">


        {
          addresses.map((item,index)=>(


            <label
              key={item._id}
              className={`
              block
              cursor-pointer
              rounded-xl
              border-2
              p-3
              sm:p-5
              transition

              ${
                selectedAddress === index
                ?
                "border-slate-900 bg-slate-50"
                :
                "border-slate-200 hover:border-slate-400"
              }

              `}
            >



              <div
                className="
                flex
                gap-3
                sm:gap-4
                "
              >



                <input
                  type="radio"
                  name="address"
                  checked={
                    selectedAddress === index
                  }
                  onChange={() =>
                    setSelectedAddress(index)
                  }
                  className="
                  mt-1
                  accent-slate-900
                  shrink-0
                  "
                />



                <div className="flex-1 min-w-0">



                  {/* Name + Badges */}


                  <div
                    className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    "
                  >

                    <h4
                      className="
                      font-semibold
                      text-sm
                      sm:text-base
                      "
                    >
                      {item.fullName}
                    </h4>



                    <span
                      className="
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                      "
                    >
                      {item.addressType}
                    </span>



                    {
                      item.isDefault && (

                        <span
                          className="
                          rounded-full
                          bg-green-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-green-700
                          "
                        >
                          Default
                        </span>

                      )
                    }


                  </div>





                  {/* Address */}


                  <div
                    className="
                    mt-3
                    flex
                    gap-2
                    text-sm
                    text-slate-600
                    "
                  >


                    <MapPin
                      size={16}
                      className="
                      mt-1
                      shrink-0
                      "
                    />



                    <p
                      className="
                      leading-6
                      break-words
                      "
                    >

                      {item.addressLine}

                      <br/>

                      {item.city}, {item.state}

                      <br/>

                      {item.country} - {item.pincode}

                    </p>


                  </div>





                  {/* Phone */}


                  <div
                    className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-600
                    "
                  >

                    <Phone size={15}/>

                    {item.phone}

                  </div>



                </div>



              </div>


            </label>


          ))
        }


      </div>


    </div>
  );
}