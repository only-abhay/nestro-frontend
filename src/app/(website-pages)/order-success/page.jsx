import OrderSuccessContent from "@/components/websiteComponent/OrderSuccess/OrderSuccess";

export default async function OrderSuccessPage({ searchParams }) {
  const params = await searchParams;

  const orderId = params?.orderId || "N/A";

  return <OrderSuccessContent orderId={orderId} />;
}