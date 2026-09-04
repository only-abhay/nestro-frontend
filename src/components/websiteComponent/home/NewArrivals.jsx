
import Image from "next/image";
import { Truck } from "lucide-react";

export default function NewArrivalSection() {
  return (
    <section className="max-w-full px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="uppercase tracking-[3px] text-[#C6A27E] text-xs mb-2">
            New arrivals
          </div>

          <h2 className="text-[24px] sm:text-[28px] lg:text-3xl font-semibold text-[#2C2016]">
            Just Landed
          </h2>
        </div>

        <button className="text-[#8B5E3C] font-medium hover:text-[#C6A27E] transition self-start sm:self-auto">
          View All
        </button>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] gap-4">
        {/* Featured Product */}

        <div className="bg-[#2C2016] rounded-2xl p-5 sm:p-7 pb-5 sm:pb-0 overflow-hidden">
          <span className="uppercase tracking-[3px] text-[#C6A27E] text-[10px] block mb-3">
            Featured
          </span>

          <h3 className="text-[16px] sm:text-[18px] text-white leading-tight mb-3">
            Scandinavian
            <br />
            Dining Set
          </h3>

          <p className="text-white/50 text-[12px] mb-5">
            Ash wood + linen chairs. Set of 4.
          </p>

          <div className="text-[#D6BFA7] text-[16px] font-semibold mb-6">
            ₹1,24,000
          </div>

          <div className="mt-8 h-[120px] sm:h-20 rounded-xl bg-[#C6A27E]/10 flex items-center justify-center">
            <Image
              src="/products/dining-set.png"
              alt="Dining Set"
              width={280}
              height={180}
              className="object-contain max-w-full h-auto"
            />
          </div>

          <button className="bg-[#C6A27E] text-white px-5 py-3 rounded-full text-sm hover:bg-[#b28c67] transition w-full sm:w-auto mt-5 sm:mt-4">
            View in Store
          </button>
        </div>

        {/* Products */}

        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-[#E8E0D5] overflow-hidden hover:shadow-lg transition">
            <div className="h-28 sm:h-20 bg-[#F5F0EB] relative">
              <Image
                src="/products/wardrobe.jpg"
                alt="Linen Wardrobe"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <div className="text-[9px] text-gray-500 mb-1">
                Bedroom
              </div>

              <div className="font-medium text-[12px] text-[#2C2016]">
                Linen Wardrobe
              </div>

              <div className="font-semibold text-[13px] mt-2">
                ₹1,18,000
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E0D5] overflow-hidden hover:shadow-lg transition">
            <div className="h-28 sm:h-20 bg-[#F5F0EB] relative">
              <Image
                src="/products/tv-console.jpg"
                alt="Walnut TV Console"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <div className="text-[9px] text-gray-500 mb-1">
                Media
              </div>

              <div className="font-medium text-[12px] text-[#2C2016]">
                Walnut TV Console
              </div>

              <div className="font-semibold text-[13px] mt-2">
                ₹67,000
              </div>
            </div>
          </div>
        </div>

        {/* Right Cards */}

        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
          {/* Offer */}

          <div className="bg-[#F5EDE4] border border-[#E8E0D5] rounded-2xl p-5">
            <span className="uppercase tracking-[3px] text-[#8B5E3C] text-[10px] block mb-2">
              Offer
            </span>

            <h4 className="font-semibold text-[#2C2016] mb-2">
              First Order 15% Off
            </h4>

            <p className="text-sm text-gray-500 mb-4">
              Use code Nestro15
            </p>

            <button className="bg-[#C6A27E] text-white px-4 py-2 rounded-full text-sm hover:bg-[#b28c67] transition w-full sm:w-auto">
              Shop Now
            </button>
          </div>

          {/* Delivery */}

          <div className="bg-white border border-[#E8E0D5] rounded-2xl p-5 flex-1">
            <span className="uppercase tracking-[3px] text-gray-500 text-[10px] block mb-3">
              Free Delivery
            </span>

            <h4 className="font-semibold text-[#2C2016] mb-2">
              On orders above ₹50,000
            </h4>

            <p className="text-sm text-gray-500 leading-relaxed">
              White glove service.
              Assembly included.
            </p>

            <div className="mt-5 text-[#C6A27E] flex justify-start">
              <Truck size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}