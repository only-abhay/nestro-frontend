export default function TestimonialSection() {
  const testimonials = [
    {
      initials: "PR",
      name: "Priya Rao",
      city: "Mumbai",
      text: "The Ember Velvet sofa is absolutely stunning. Delivery was flawless and the quality exceeded expectations.",
    },
    {
      initials: "AS",
      name: "Arjun Sharma",
      city: "Bangalore",
      text: "Nestro transformed our living room. Every piece feels like it belongs — timeless and beautifully crafted.",
    },
    {
      initials: "NK",
      name: "Neha Kapoor",
      city: "Delhi",
      text: "Premium quality at a fair price. The travertine side table is a conversation starter every time.",
    },
  ];

  return (
    <section className="max-w-full px-4 sm:px-6 pb-10">

      <div className="uppercase tracking-[3px] text-[#C6A27E] text-[10px] mb-3">
        What our customers say
      </div>

      <h2 className="text-[18px] md:text-[18px] font-semibold text-[#2C2016] mb-10">
        Loved by 12,000+ Homes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#E8E0D5] rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300"
          >

            <div className="text-[#C6A27E] text-[11px] mb-4">
              ★★★★★
            </div>

            <p className="text-gray-600 leading-6 sm:leading-7 text-[12px] mb-3">
              "{item.text}"
            </p>

            <div className="flex items-center gap-4">

              <div className="w-8 h-8 rounded-full bg-[#C6A27E] text-white flex items-center justify-center text-[12px] font-semibold flex-shrink-0">
                {item.initials}
              </div>

              <div>
                <h5 className="font-semibold text-[12px] text-[#2C2016]">
                  {item.name}
                </h5>

                <span className="text-[10px] text-gray-500">
                  {item.city}
                </span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}