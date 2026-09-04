import ProfileLayout from "@/components/websiteComponent/profile/ProfileLayout";
import { GetOrderById } from "@/utils/GetAPI";
import { GetProfile } from "@/utils/ServerAPi";



export default async function Page() {
     let user = null
     let order = null
try {
    const response = await GetProfile()
  const OrderById = await GetOrderById({ id: response.user._id });
   if(OrderById?.success){
    order = OrderById?.order
  }

 if(response?.success){
  user = response?.user
 }
  
} catch (error) {
  console.log(response)
  
}
 
  return <ProfileLayout user={user} order={order} />;
}