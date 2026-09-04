import { Suspense } from "react";
import OrderSuccessContent from "@/components/websiteComponent/OrderSuccess/OrderSuccess";

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <OrderSuccessContent />
    </Suspense>
  );
}