import AuthIllustration from "./AuthIllustration";
import AuthFeature from "./AuthFeature";

import {
  Truck,
  Star,
  BadgePercent,
} from "lucide-react";

export default function AuthLeftPanel() {
  return (
    <div
      className="
      hidden
      lg:flex
      h-screen
        w-[42%]
        bg-[#1F1A17]
        flex-col
        justify-center
        items-center
        px-12
      "
    >
      {/* Logo */}

      <div
        className="
          text-[18px]
          font-medium
          tracking-[0.14em]
          uppercase
          text-[#FAF7F4]
          mb-8
        "
      >
        Nestro
        <span className="text-[#C6A27E]">.</span>
      </div>

      {/* Illustration */}

      <div className="text-center mb-8">
        <AuthIllustration />
      </div>

      {/* Heading */}

      <h2
        className="
          text-[28px]
          font-normal
          leading-[1.25]
          tracking-[-0.02em]
          text-[#FAF7F4]
          text-center
          mb-3
        "
      >
        Your{" "}
        <em className="not-italic text-[#D6BFA7]">
          Dream Home
        </em>
        <br />
        Starts Here
      </h2>

      {/* Description */}

      <p
        className="
          text-[12px]
          leading-[1.7]
          text-white/45
          text-center
          mb-7
        "
      >
        Join 12,000 homeowners who've transformed
        their living spaces with Nestro.
      </p>

      {/* Features */}

      <div className="w-full max-w-[240px]">
        <AuthFeature
          icon={Truck}
          text="Free delivery + white glove assembly on all orders"
        />

        <AuthFeature
          icon={Star}
          text="Earn reward points on every purchase"
        />

        <AuthFeature
          icon={BadgePercent}
          text="Members-only prices & early access"
        />
      </div>
    </div>
  );
}