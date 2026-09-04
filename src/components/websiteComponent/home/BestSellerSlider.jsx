"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

export default function BestSellerSlider({ products = [] }) {
  const [slides, setSlides] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 480) {
        setSlides(1);
      } else if (window.innerWidth < 768) {
        setSlides(2);
      } else if (window.innerWidth < 1024) {
        setSlides(3);
      } else {
        setSlides(4);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: products.length > slides,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product._id} className="px-3">
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>
  );
}