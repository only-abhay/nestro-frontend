import OrderSuccessContent from "./OrderSuccessContent";

export default async function OrderSuccessPage({ searchParams }) {
  const params = await searchParams;

  const orderId = params?.orderId || "N/A";

  return <OrderSuccessContent orderId={orderId} />;
}