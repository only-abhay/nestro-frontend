import CheckoutLayout from "@/components/websiteComponent/checkout/CheckoutLayout";
import { GetProfile } from "@/utils/ServerAPi";


export const metadata = {
  title: "Checkout | Nestro",
  description: "Secure checkout page",
};

export default async function CheckoutPage() {

     let user = null
  const response = await GetProfile()
 if(response?.success){
  user = response.user
 }
  return <CheckoutLayout user={user}  />;
}