import {
  Truck,
  RefreshCcw,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function USPSection() {
  const usps = [
    {
      icon: Truck,
      title: "Free Delivery",
      sub: "On all orders above ₹50,000",
    },
    {
      icon: RefreshCcw,
      title: "30-Day Returns",
      sub: "Hassle-free return policy",
    },
    {
      icon: Wrench,
      title: "Expert Assembly",
      sub: "Professional setup at home",
    },
    {
      icon: ShieldCheck,
      title: "5-Year Warranty",
      sub: "On all furniture items",
    },
  ];

  return (
    <section className="max-w-full px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {usps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white border border-[#E8E0D5] rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="mx-auto mb-4 flex items-center justify-center text-[#C6A27E]">
                <Icon size={22} />
              </div>

              <h4 className="text-[#2C2016] font-semibold text-[12px] mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-gray-500 text-[10px] leading-relaxed">
                {item.sub}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}