import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart: [],
    sale_total: 0,
    original_total:0
}

const cart = createSlice({
  name: "cart",

  initialState,

  reducers: {

    addcart(state, {payload}) {
      const existingData = state.cart.find((item)=>item.id===payload.id)
      if(existingData){
        existingData.qty+=1

      }else{
         state.cart.push(payload)
      }
     state.sale_total = state.cart.reduce(
    (total, item) => total + item.salePrice * item.qty,
    0
  );

  state.original_total = state.cart.reduce(
    (total, item) => total + item.originalPrice * item.qty,
    0
  );
  localStorage.setItem("cart",JSON.stringify(state))
      

    },
  removeFromcart(state, { payload }) {

  state.cart = state.cart.filter(
    (i) => payload.id !== i.id
  );

  state.sale_total = state.cart.reduce(
    (total, item) => total + item.salePrice * item.qty,
    0
  );

  state.original_total = state.cart.reduce(
    (total, item) => total + item.originalPrice * item.qty,
    0
  );
  localStorage.setItem("cart",JSON.stringify(state))

},
      IncreaseQty(state, {payload}) {
      const existingData = state.cart.find((item)=>item.id===payload.id)
         if(existingData){
          existingData.qty+=1
         }

  state.sale_total = state.cart.reduce(
    (total, item) => total + item.salePrice * item.qty,
    0
  );

  state.original_total = state.cart.reduce(
    (total, item) => total + item.originalPrice * item.qty,
    0
  );
  localStorage.setItem("cart",JSON.stringify(state))

    },
      decreaseqty(state, {payload}) {
          const existingData = state.cart.find((item)=>item.id===payload.id)
          if(!existingData)return
         if(existingData.qty>1){
           existingData.qty-=1
         }else{
                state.cart= state.cart.filter((i)=>payload.id!==i.id)
         }
  state.sale_total = state.cart.reduce(
    (total, item) => total + item.salePrice * item.qty,
    0
  );

  state.original_total = state.cart.reduce(
    (total, item) => total + item.originalPrice * item.qty,
    0
  );
  localStorage.setItem("cart",JSON.stringify(state))

    },

         emptycart(state) {
        state.cart=[],
        state.sale_total=0,
        state.original_total=0
  localStorage.setItem("cart",JSON.stringify(state))

    },

  lsToCart(state, { payload }) {
  state.cart = payload.cart || [];
  state.sale_total = payload.sale_total || 0;
  state.original_total = payload.original_total || 0;
}

    },
 


  },
);


export const { addcart,removeFromcart,IncreaseQty , decreaseqty , emptycart, lsToCart } = cart.actions;

export default cart.reducer;