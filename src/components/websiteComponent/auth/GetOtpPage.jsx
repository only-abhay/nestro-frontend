
"use client";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import axiosCat from "@/utils/helper";

export default function OtpVerificationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email");

  const inputs = useRef([]);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  // OTP input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Next input focus
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Backspace handle
  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      toast.error("Please enter 6 digit OTP");
      return;
    }

    if (!email) {
      toast.error("Email is missing");
      return;
    }

    try {
      setLoading(true);

      const res = await axiosCat.post(
        "/user/verify-otp",
        {
          email,
          otp: finalOtp,
        }
      );

      toast.success(
        res?.data?.message || "OTP Verified Successfully"
      );

      router.push("/auth");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Invalid OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-58px)] flex">

      {/* LEFT PANEL */}
      <div
        className="
          h-screen
          hidden
          lg:flex
          w-[42%]
          bg-[#1F1A17]
          flex-col
          justify-center
          items-center
          px-12
        "
      >
        <div
          className="
            text-[18px]
            uppercase
            tracking-[0.14em]
            text-[#FAF7F4]
            mb-10
          "
        >
          Nestro
          <span className="text-[#C6A27E]">.</span>
        </div>

        <div
          className="
            w-28
            h-28
            rounded-full
            bg-[#2D2723]
            flex
            items-center
            justify-center
            mb-8
          "
        >
          <ShieldCheck
            size={54}
            className="text-[#D6BFA7]"
          />
        </div>

        <h2
          className="
            text-[30px]
            text-center
            leading-tight
            text-[#FAF7F4]
            mb-4
          "
        >
          Verify your
          <br />
          <span className="text-[#D6BFA7]">
            Identity
          </span>
        </h2>

        <p
          className="
            text-white/45
            text-center
            text-sm
            leading-7
            max-w-[280px]
          "
        >
          We've sent a secure verification code to
          your registered email address.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="
          flex-1
          flex
          justify-center
          items-center
          px-8
        "
      >
        <div className="w-full max-w-[380px]">

          {/* Back */}
          <Link
            href="/auth"
            className="
              inline-flex
              items-center
              gap-2
              text-[#8B8680]
              text-sm
              mb-8
            "
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          {/* Heading */}
          <h1
            className="
              text-[28px]
              font-medium
              text-[#2F2B27]
            "
          >
            OTP Verification
          </h1>

          {/* Description */}
          <p
            className="
              text-[#8B8680]
              text-sm
              mt-2
              mb-8
            "
          >
            Enter the 6-digit verification code sent to

            <br />

            <span
              className="
                text-[#8B5E3C]
                font-medium
              "
            >
              {email || "your email"}
            </span>
          </p>

          {/* OTP INPUTS */}
          <div
            className="
              flex
              justify-between
              mb-8
            "
          >
            {otp.map((item, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={item}
                maxLength={1}
                onChange={(e) =>
                  handleChange(e, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                className="
                  w-14
                  h-14
                  rounded-lg
                  border
                  border-[#E5DDD5]
                  bg-[#FAFAF9]
                  text-center
                  text-xl
                  font-semibold
                  outline-none
                  focus:border-[#8B5E3C]
                "
              />
            ))}
          </div>

          {/* VERIFY BUTTON */}
          <button
            onClick={handleVerifyOtp}
            disabled={loading}
            className="
              w-full
              py-3
              rounded-lg
              bg-[#8B5E3C]
              text-white
              font-medium
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            {loading
              ? "Verifying..."
              : "Verify OTP"}
          </button>

          {/* RESEND */}
          <div className="text-center mt-7">
            <p className="text-[#8B8680] text-sm">
              Didn't receive the code?
            </p>

            <button
              type="button"
              className="
                mt-2
                text-[#8B5E3C]
                font-medium
              "
            >
              Resend Code
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}