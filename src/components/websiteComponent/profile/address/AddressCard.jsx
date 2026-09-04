import {
  Home,
  Building2,
  MapPin,
  Phone,
  User,
} from "lucide-react";


export default function AddressCard({
  address,
}) {

  return (

    <div
      className="
      relative
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-4
      sm:p-5
      shadow-sm
      hover:shadow-md
      transition-all
      "
    >


      {
        address.isDefault && (

          <span
            className="
            absolute
            top-4
            right-4
            rounded-full
            bg-emerald-100
            px-3
            py-1
            text-[11px]
            font-semibold
            text-emerald-700
            "
          >
            Default
          </span>

        )
      }



      <div
        className="
        flex
        items-center
        gap-2
        mb-5
        "
      >

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-slate-100
          flex
          items-center
          justify-center
          shrink-0
          "
        >

          {
            address.addressType === "Office"
            ?
            <Building2 size={18}/>
            :
            <Home size={18}/>
          }

        </div>



        <div className="min-w-0">

          <h3
            className="
            font-semibold
            text-slate-900
            truncate
            "
          >
            {address.addressType}
          </h3>


          <p
            className="
            text-xs
            text-slate-500
            "
          >
            Delivery Address
          </p>


        </div>


      </div>



      <div className="flex items-start gap-3 mb-3">

        <User
          size={16}
          className="text-slate-500 mt-1 shrink-0"
        />


        <div className="min-w-0">

          <p className="text-xs text-slate-500">
            Full Name
          </p>


          <p className="font-medium text-slate-900 break-words">
            {address.fullName}
          </p>

        </div>

      </div>



      <div className="flex items-start gap-3 mb-3">

        <Phone
          size={16}
          className="text-slate-500 mt-1 shrink-0"
        />


        <div>

          <p className="text-xs text-slate-500">
            Phone
          </p>


          <p className="font-medium text-slate-900">
            {address.phone}
          </p>

        </div>

      </div>




      <div className="flex items-start gap-3">


        <MapPin
          size={16}
          className="text-slate-500 mt-1 shrink-0"
        />



        <div className="min-w-0">


          <p className="text-xs text-slate-500 mb-1">
            Address
          </p>


          <p
            className="
            text-sm
            leading-6
            text-slate-700
            break-words
            "
          >

            {address.addressLine}

            <br />

            {address.city}, {address.state}

            <br />

            {address.country} - {address.pincode}

          </p>


        </div>


      </div>



    </div>

  );
}