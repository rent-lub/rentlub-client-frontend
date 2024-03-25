import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "~/types/productModel";

const initialState: { isOpen: boolean; currentProduct: Product | null } = {
  isOpen: false,
  currentProduct: null,
};

const bottomSheetSlice = createSlice({
  name: "bottomSheet",
  initialState,
  reducers: {
    trigger: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCurrentProductBottomSheet(state, action: PayloadAction<Product | null>) {
      state.currentProduct = action.payload;
    },
  },
});

export const { trigger, setCurrentProductBottomSheet } =
  bottomSheetSlice.actions;
export default bottomSheetSlice.reducer;
