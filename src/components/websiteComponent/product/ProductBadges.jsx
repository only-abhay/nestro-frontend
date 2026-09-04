import {
  Sparkles,
  Star,
  BadgeCheck,
} from "lucide-react";

export default function ProductBadges({ product }) {
  const badges = [];

  if (product.bestSeller) {
    badges.push({
      label: "Best Seller",
      icon: Star,
      className:
        "border-amber-200 bg-amber-50/80 text-amber-700",
    });
  }

  if (product.featured) {
    badges.push({
      label: "Featured",
      icon: BadgeCheck,
      className:
        "border-violet-200 bg-violet-50/80 text-violet-700",
    });
  }

  if (product.newArrival) {
    badges.push({
      label: "New Arrival",
      icon: Sparkles,
      className:
        "border-emerald-200 bg-emerald-50/80 text-emerald-700",
    });
  }

  if (!badges.length) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <span
            key={badge.label}
            className={`
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-semibold
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-md
              ${badge.className}
            `}
          >
            <Icon
              size={16}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>{badge.label}</span>
          </span>
        );
      })}
    </div>
  );
}