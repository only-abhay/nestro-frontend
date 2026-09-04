export const dynamic = "force-dynamic";

import ProfileLayout from "@/components/websiteComponent/profile/ProfileLayout";
import { GetOrderById } from "@/utils/GetAPI";
import { GetProfile } from "@/utils/ServerAPi";

export default async function Page() {
  let user = null;
  let order = null;

  try {
    const response = await GetProfile();

    if (response?.success && response?.user?._id) {
      user = response.user;

      const OrderById = await GetOrderById({
        id: response.user._id,
      });

      if (OrderById?.success) {
        order = OrderById.order;
      }
    }
  } catch (error) {
    console.error("Profile Page Error:", error);
  }

  return <ProfileLayout user={user} order={order} />;
}