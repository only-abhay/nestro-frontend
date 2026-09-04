
import { Suspense } from "react";
import OtpVerificationContent from "@/components/websiteComponent/auth/GetOtpPage";

export default function OtpVerificationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <OtpVerificationContent />
    </Suspense>
  );
}