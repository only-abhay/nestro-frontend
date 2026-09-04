import Hero from "@/components/websiteComponent/home/Hero";
import Categories from "@/components/websiteComponent/home/CategoryStrip";
import BestSellers from "@/components/websiteComponent/home/BestSellers";
import NewsletterBanner from "@/components/websiteComponent/home/Newsletter";
import NewArrivalSection from "@/components/websiteComponent/home/NewArrivals";
import USPSection from "@/components/websiteComponent/home/USPSection";
import TestimonialSection from "@/components/websiteComponent/home/Testimonials";

export default function Home({}) {

  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <NewArrivalSection />
      <USPSection/>
      <TestimonialSection />
      <NewsletterBanner />
    </>
  );
}