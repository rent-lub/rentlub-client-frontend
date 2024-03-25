import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProduct, getSampleShop } from "~/services/productService";
import { Product } from "~/types/productModel";
import { Shop } from "~/types/shopModel";

export interface ShopState {
  shop: Shop | null;
  product: Product[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: ShopState = {
  shop: null,
  product: null,
  error: null,
  loading: false,
};

export const fetchSampleShop = createAsyncThunk<
  { shop: Shop | null; product: Product[] | null } | null,
  void
>("shop/fetcSampleShop", async () => {
  var shop = await getSampleShop();
  var product = await getAllProduct(shop?._id ?? "");
  return {
    shop: shop,
    product: product,
  };
});

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSampleShop.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSampleShop.fulfilled,
        (
          state,
          action: PayloadAction<{
            shop: Shop | null;
            product: Product[] | null;
          } | null>
        ) => {
          state.shop = action.payload?.shop ?? null;
          state.product = action.payload?.product ?? null;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchSampleShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default shopSlice.reducer;
