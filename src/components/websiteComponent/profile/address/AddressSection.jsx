"use client";

import { useState } from "react";

import AddressCard from "./AddressCard";
import AddressModal from "./AddressModel";

import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";


export default function AddressSection({
  user
}) {

  const [open, setOpen] = useState(false);


  return (
    <>

      <SectionCard>

        <div
          className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          justify-between
          gap-3
          mb-5
          "
        >

          <SectionTitle>
            Saved Addresses
          </SectionTitle>


          <button
            onClick={() => setOpen(true)}
            className="
            w-full
            sm:w-auto
            px-4
            py-2
            rounded-lg
            bg-[#8b5e3c]
            text-white
            text-sm
            font-medium
            hover:bg-[#2c2016]
            transition
            "
          >
            + Add Address
          </button>


        </div>


        {
          user?.addresses?.length > 0 && (

            <div
              className="
              grid
              grid-cols-1
              xl:grid-cols-2
              gap-4
              "
            >

              {
                user.addresses.map((address) => (

                  <AddressCard
                    key={address._id}
                    address={address}
                  />

                ))
              }


            </div>

          )
        }


      </SectionCard>



      <AddressModal
        open={open}
        onClose={() => setOpen(false)}
      />


    </>
  );
}