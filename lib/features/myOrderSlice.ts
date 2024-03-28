import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Renting } from "~/services/rentService";
import { Product } from "~/types/productModel";

export interface MyOrder {
  renting: Renting;
  product: Product;
}

const initialState: { allOrder: MyOrder[] } = { allOrder: [] };

const MyOrderSlice = createSlice({
  name: "myOrder",
  initialState,
  reducers: {
    setAllMyOrder: (state, action: PayloadAction<MyOrder[]>) => {
      state.allOrder = action.payload ?? [];
    },
  },
});

export const { setAllMyOrder } = MyOrderSlice.actions;
export default MyOrderSlice.reducer;
