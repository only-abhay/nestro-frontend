import { bestSellers } from "@/data/products";
import axios from "axios";
import axiosCat from "./helper";

const GetCategoryData = async () => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_CATEGORY_URL+"/category/get");

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


const GetRoomData = async () => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_CATEGORY_URL+"/room-type/get");
  
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const GetMaterial = async () => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_CATEGORY_URL+"/material/get");
  
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const GetProduct = async ({category=null , room=null , material=null , min=null,max=null,stock=null , bestSeller=null,limit= null,sort=null , status=true,page=1}={}) => {
  try {
    const query = new URLSearchParams()
    if(category) query.append("category",category)
    if(room) query.append("room",room)
    if(material) query.append("material",material)
    if(bestSeller) query.append("bestSeller",bestSeller)
    if(limit) query.append("limit",limit)
     if(sort !==null) query.append("sort",sort)
     if(status) query.append("status",status)
     if(page) query.append("page",page)
    if(min) query.append("min", min)
    if(max) query.append("max", max)
      if(stock !== null) query.append("stock",stock)
    const res = await axios.get(process.env.NEXT_PUBLIC_CATEGORY_URL+`/product/get?${query.toString()}`);
  
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// GetOrders for admin

const GetOrders = async ({activeQuery=null}) => {
  try {
    const query = new URLSearchParams()
    if(activeQuery) query.append("query",activeQuery)


    const res = await axiosCat.get(`/order/get-orders?${query.toString()}`);
    return res.data;
    console.log(res.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const GetTransactions = async ({activeQuery=null}) => {
  try {
    const query = new URLSearchParams();

    if(activeQuery != null){
      query.append(
        "query",
        activeQuery
      );
    }
    const res = await axiosCat.get(
      `/transaction/get-transactions?${query.toString()}`
    );
    return res.data;

  } catch(error){

    console.log(
      "Get Transactions Error:",
      error
    );
    return null;

  }
};


// get Order for Profile

export const GetOrderById = async ({ id }) => {
  try {
    const response = await axiosCat.get(`/order/get-orders/${id}`);

    if (response?.data?.success) {
      return {
        success: true,
        order: response?.data.Orders,
        Total: response?.data.Total,
      };
    }

    return {
      success: false,
      order: null,
    };
  } catch (error) {
    console.log(error.message)
    console.error("Get Order Error:", error);

    return {
      success: false,
      order: null,
      error: error.response?.data?.message || "Something went wrong",
    };
  }
};


export  {GetRoomData ,GetCategoryData , GetMaterial , GetProduct,GetOrders , GetTransactions , GetOrderById};

