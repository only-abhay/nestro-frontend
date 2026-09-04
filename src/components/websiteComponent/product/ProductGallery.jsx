"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


export default function ProductGallery({ product }) {


  const galleryImages =
    product?.images?.length > 0
      ? [
          product.thumbnail,
          ...product.images,
        ]
      : [
          product?.thumbnail || "/placeholder.png",
        ];



  const [activeImage, setActiveImage] =
    useState(galleryImages[0]);



  const currentIndex = Math.max(
    galleryImages.indexOf(activeImage),
    0
  );





  const nextImage = () => {

    const next =
      (currentIndex + 1)
      %
      galleryImages.length;


    setActiveImage(
      galleryImages[next]
    );

  };





  const previousImage = () => {

    const prev =
      (
        currentIndex - 1 +
        galleryImages.length
      )
      %
      galleryImages.length;


    setActiveImage(
      galleryImages[prev]
    );

  };





  useEffect(() => {


    const handleKey = (e) => {


      if(e.key === "ArrowRight"){
        nextImage();
      }


      if(e.key === "ArrowLeft"){
        previousImage();
      }


    };



    window.addEventListener(
      "keydown",
      handleKey
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKey
      );

    };


  }, [currentIndex]);






  return (

    <div className="space-y-6">


      {/* Main Image */}


      <div
        className="
          relative
          aspect-square
          overflow-hidden
          rounded-[24px]
          border
          border-slate-200
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          group
        "
      >


        {/* Counter */}

        {
          galleryImages.length > 1 && (

            <div
              className="
                absolute
                right-5
                top-5
                z-20
                rounded-full
                bg-black/50
                px-4
                py-2
                text-sm
                font-medium
                text-white
                backdrop-blur-md
              "
            >
              {currentIndex + 1}
              /
              {galleryImages.length}
            </div>

          )
        }





        <Image

          src={
            activeImage || "/placeholder.png"
          }

          alt={
            product?.name || "Product"
          }

          fill

          priority

          sizes="
          (max-width:768px) 100vw,
          50vw
          "

          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "

        />






        {
          galleryImages.length > 1 && (

            <>

              <button

                onClick={previousImage}

                className="
                  hidden
                  md:flex
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  shadow-xl
                  transition
                  hover:scale-110
                "

              >

                <ChevronLeft size={24}/>

              </button>





              <button

                onClick={nextImage}

                className="
                  hidden
                  md:flex
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  shadow-xl
                  transition
                  hover:scale-110
                "

              >

                <ChevronRight size={24}/>

              </button>


            </>

          )
        }



      </div>







      {/* Mobile Dots */}


      {
        galleryImages.length > 1 && (

          <div
            className="
              flex
              justify-center
              gap-2
              md:hidden
            "
          >

            {
              galleryImages.map(
                (img,index)=>(

                  <button

                    key={index}

                    onClick={() =>
                      setActiveImage(img)
                    }

                    className={`
                      h-2
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        activeImage === img
                        ?
                        "w-10 bg-emerald-600"
                        :
                        "w-2 bg-slate-300"
                      }
                    `}

                  />

                )
              )
            }


          </div>

        )
      }







      {/* Thumbnails */}


      {
        galleryImages.length > 1 && (

          <div
            className="
              hidden
              md:flex
              gap-4
              overflow-x-auto
              pb-2
            "
          >

            {
              galleryImages.map(
                (img,index)=>(

                  <button

                    key={index}

                    onClick={() =>
                      setActiveImage(img)
                    }

                    className={`
                      relative
                      shrink-0
                      h-24
                      w-24
                      overflow-hidden
                      rounded-2xl
                      border-2
                      transition-all
                      duration-300
                      hover:-translate-y-1

                      ${
                        activeImage === img
                        ?
                        "border-emerald-500 ring-4 ring-emerald-100"
                        :
                        "border-slate-200 hover:border-slate-400"
                      }
                    `}

                  >

                    <Image

                      src={
                        img || "/placeholder.png"
                      }

                      alt={
                        `${product?.name}-${index}`
                      }

                      fill

                      sizes="100px"

                      className="
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-110
                      "

                    />


                  </button>


                )
              )
            }

          </div>

        )
      }



    </div>

  );

}