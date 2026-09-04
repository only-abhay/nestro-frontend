import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  ArrowRight,
} from "lucide-react";

export default function DeliveryInfo() {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      desc: "Complimentary shipping on eligible orders across India.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "Protected checkout with trusted payment partners.",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      desc: "Hassle-free 7 day return & replacement policy.",
    },
    {
      icon: Headphones,
      title: "24×7 Support",
      desc: "Furniture experts ready to help whenever you need.",
    },
  ];

  return (
    <section className="py-14">
      <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-8 lg:p-12 shadow-sm">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Premium Experience
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Customers Love Shopping With Us
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            Every order is backed by secure payments, reliable delivery,
            dedicated customer support, and an effortless return experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-emerald-200
                  hover:shadow-2xl
                "
              >
                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-emerald-50
                    text-emerald-600
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-emerald-600
                    group-hover:text-white
                  "
                >
                  <Icon size={30} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative mt-8 flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}