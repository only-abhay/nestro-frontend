import ContactInfoItem from "./ContactInfoItem";
import { contactInfo } from "@/data/contactData";

export default function ContactInfoCard() {
  return (
    <div className="bg-white border border-[#E7DED3] rounded-xl p-5 sm:p-6">
      {contactInfo.map((item) => (
        <ContactInfoItem
          key={item.label}
          {...item}
        />
      ))}
    </div>
  );
}