import { cookies } from "next/headers";
import axiosCat from "./helper";

export const GetProfile = async () => {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("jwt")?.value;

    if (!token) {
      return {
        success: false,
        user: null,
      };
    }

    const response = await axiosCat.get("/user/get-me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data?.success) {
      return {
        user: response.data.user,
        success: true,
      };
    }

    return {
      success: false,
      user: null,
    };
  } catch (error) {
    console.error("Error fetching profile:", error);

    return {
      success: false,
      user: null,
    };
  }
};