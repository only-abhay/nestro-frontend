import { Suspense } from "react";
import OrderSuccessContent from "@/components/websiteComponent/OrderSuccess/OrderSuccess";

export default function OrderSuccessPage({ searchParams }) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <OrderSuccessPageContent searchParams={searchParams} />
    </Suspense>
  );
}

async function OrderSuccessPageContent({ searchParams }) {
  const params = await searchParams;

  const orderId = params?.orderId || "N/A";

  return <OrderSuccessContent orderId={orderId} />;
}