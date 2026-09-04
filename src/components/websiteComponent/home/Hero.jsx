"use client";

import Slider from "react-slick";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const images = [
  "/images/hero.png.1.png",
  "/images/hero.png.2.png",
  "/images/hero.png.3.png",
];


export default function Hero() {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1200,
    fade: true,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };


  return (
    <section
      className="
      relative 
      min-h-[520px]
      sm:min-h-[500px]
      lg:min-h-[600px]
      overflow-hidden
      rounded-2xl
      sm:rounded-3xl
      mx-3
      sm:mx-6
      my-5
      "
    >


      {/* Background Slider */}
      <Slider
        {...settings}
        className="absolute inset-0 h-full w-full"
      >

        {
          images.map((img,index)=>(
            <div key={index}>

              <div 
              className="
              relative
              h-[520px]
              sm:h-[500px]
              lg:h-[600px]
              "
              >

                <Image
                  src={img}
                  alt={`Furniture ${index + 1}`}
                  fill
                  priority={index===0}
                  className="
                  object-cover
                  object-center
                  "
                />


                <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/70
                via-black/50
                to-black/20
                "
                />

              </div>

            </div>
          ))
        }


      </Slider>



      {/* Content */}
      <div
      className="
      absolute
      inset-0
      z-20
      flex
      items-center
      "
      >


        <div
        className="
        w-full
        px-5
        sm:px-8
        lg:px-12
        "
        >


          <div
          className="
          max-w-xl
          "
          >


            <span
            className="
            uppercase
            tracking-[3px]
            sm:tracking-[4px]
            text-white
            text-[10px]
            sm:text-xs
            font-semibold
            "
            >
              Summer Collection 2026
            </span>



            <h1
            className="
            mt-4
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-light
            leading-tight
            text-white
            "
            >

              Where Comfort
              <br/>
              Meets 
              <span className="italic">
                Craft
              </span>

            </h1>



            <p
            className="
            mt-4
            sm:mt-5
            max-w-lg
            text-sm
            sm:text-base
            lg:text-lg
            text-white/90
            leading-6
            sm:leading-7
            "
            >

              Scandinavian-inspired furniture for modern living.
              Curated pieces that combine timeless craftsmanship,
              premium materials, and unmatched comfort.

            </p>



            {/* Buttons */}
            <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-3
            sm:gap-4
            mt-7
            "
            >


              <Link 
              href="/store"
              className="w-full sm:w-auto"
              >

                <button
                className="
                w-full
                sm:w-auto
                bg-[#8B5E3C]
                hover:bg-[#A16A42]
                transition
                px-7
                py-3
                rounded-lg
                flex
                items-center
                justify-center
                gap-2
                text-white
                font-medium
                shadow-lg
                "
                >

                  Shop Collection
                  <ArrowRight size={18}/>

                </button>


              </Link>



              <button
              className="
              w-full
              sm:w-auto
              border
              border-white/40
              bg-white/10
              backdrop-blur-md
              hover:bg-white/20
              transition
              px-7
              py-3
              rounded-lg
              text-white
              font-medium
              "
              >

                View Lookbook

              </button>



            </div>


          </div>


        </div>


      </div>


    </section>
  );
}