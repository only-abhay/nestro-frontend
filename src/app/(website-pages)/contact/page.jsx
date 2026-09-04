import ContactHero from "@/components/websiteComponent/contact/ContactHero";
import ContactInfoCard from "@/components/websiteComponent/contact/ContactInfoCards";
import MapPlaceholder from "@/components/websiteComponent/contact/MapPlaceholder";
import ShowroomSection from "@/components/websiteComponent/contact/ShowroomSection";
import ContactForm from "@/components/websiteComponent/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <div className="px-4 sm:px-6 pb-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.3fr] gap-6 lg:gap-8">
        <div className="space-y-4">
          <ContactInfoCard />
          <MapPlaceholder />
          <ShowroomSection />
        </div>

        <ContactForm />
      </div>
    </main>
  );
}