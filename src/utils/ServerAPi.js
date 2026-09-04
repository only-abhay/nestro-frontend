import { cookies } from "next/headers";
import axiosCat from "./helper";

export const GetProfile = async () => {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("jwt")?.value;
    if(!token){
      return{
    user : []
    
      }

    }

    // User login nahi hai
    if (!token) {
      return null;
    }

    const response = await axiosCat.get("/user/get-me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.success) {
      return {
        user: response.data.user,
        success: response.data.success,
      }
    }

    return null;
  } catch (error) {
    console.error("Error fetching profile:", error);

    return null;
  }
};
