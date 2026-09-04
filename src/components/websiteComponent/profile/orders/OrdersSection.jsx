import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

import OrderRow from "./OrderRow";


export default function OrdersSection({
  order = []
}) {

  return (
    <SectionCard>

      <SectionTitle>
        Recent Orders
      </SectionTitle>


      {
        order.map((o) => (

          <OrderRow
            key={o._id}
            order={o}
          />

        ))
      }


    </SectionCard>
  );
}