import { Send } from "lucide-react";
import { subjectOptions } from "@/data/contactData";

export default function ContactForm() {
  return (
    <div className="bg-white border border-[#E7DED3] rounded-xl p-5 sm:p-7 h-fit">
      <h2 className="text-lg font-medium text-[#2C2016] mb-1">
        Send us a message
      </h2>

      <p className="text-sm text-[#8F8F8F] mb-6">
        We typically respond within 24 hours.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-[#8F8F8F] mb-2 tracking-[0.04em]">
            First Name
          </label>

          <input
            placeholder="Rahul"
            className="w-full px-3 py-2.5 border border-[#E7DED3] rounded-md bg-[#FAF7F4] text-sm outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 focus:border-[#8B5E3C]"
          />
        </div>

        <div>
          <label className="block text-xs text-[#8F8F8F] mb-2 tracking-[0.04em]">
            Last Name
          </label>

          <input
            placeholder="Khanna"
            className="w-full px-3 py-2.5 border border-[#E7DED3] rounded-md bg-[#FAF7F4] text-sm outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 focus:border-[#8B5E3C]"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs text-[#8F8F8F] mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="rahul@email.com"
          className="w-full px-3 py-2.5 border border-[#E7DED3] rounded-md bg-[#FAF7F4] text-sm outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 focus:border-[#8B5E3C]"
        />
      </div>

      <div className="mb-4">
        <label className="block text-xs text-[#8F8F8F] mb-2">
          Subject
        </label>

        <select className="w-full px-3 py-2.5 border border-[#E7DED3] rounded-md bg-[#FAF7F4] text-sm outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 focus:border-[#8B5E3C]">
          {subjectOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-xs text-[#8F8F8F] mb-2">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Tell us how we can help..."
          className="w-full px-3 py-2.5 border border-[#E7DED3] rounded-md bg-[#FAF7F4] resize-none text-sm outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 focus:border-[#8B5E3C]"
        />
      </div>

      <button className="w-full flex justify-center items-center gap-2 bg-[#8B5E3C] hover:bg-[#724c31] transition-colors text-white py-3 rounded-md text-sm font-medium">
        Send Message
        <Send size={16} />
      </button>
    </div>
  );
}