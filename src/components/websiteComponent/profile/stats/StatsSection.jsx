import StatCard from "./StatCard";
import SectionCard from "../common/SectionCard";

export default function StatsSection({ order = [] }) {

  const totalOrders = order?.length;

  const totalSpent = order.reduce(
    (total, item) => total + item?.total_amount,
    0
  );

  const deliveredOrders = order.filter(
    (item) => item?.order_status === 6
  ).length;

  const pendingOrders = order.filter(
    (item) => item?.order_status !== 6
  ).length;


  return (
    <SectionCard>

      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-4
        gap-3
        "
      >

        <StatCard
          number={totalOrders}
          label="Total Orders"
        />


        <StatCard
          number={`₹${totalSpent.toLocaleString()}`}
          label="Total Spent"
        />


        <StatCard
          number={deliveredOrders}
          label="Delivered"
        />


        <StatCard
          number={pendingOrders}
          label="Pending"
        />

      </div>

    </SectionCard>
  );
}