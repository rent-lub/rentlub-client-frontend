import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ShippingMethod {
  image: string;
  name: string;
  fee: number;
}

export interface ShippingState {
  shippingMethods: ShippingMethod[] | null;
  selectedShipping: ShippingMethod | null;
}

const initialState: ShippingState = {
  selectedShipping: null,
  shippingMethods: [
    {
      image:
        "https://yt3.googleusercontent.com/dSMIZcBg7A2BD5D5GEJpLrsSFjL43VOQyBxIhRaUPA7SxaDaNlrAScUFyakcBKoUYnssTgyoJQ=s900-c-k-c0x00ffffff-no-rj",
      name: "Kerry",
      fee: 30,
    },
    {
      image: "/images/thailand_post.png",
      name: "Thailand Post",
      fee: 27,
    },
    {
      image:
        "https://play-lh.googleusercontent.com/vVGZ4OkxTaKxXUEajlP84odiR1wfCH6eF-YjIPSs89CmxzFZprhyMXfM3Bf-nOTvCVk",
      name: "J&T",
      fee: 29,
    },
    {
      image:
        "  https://play-lh.googleusercontent.com/J337AQh7L-iOlFjDukX0DuMqDsJ0h1aygYMwdZDABJTvxW_5VRTkUqyFDdwkyoG1h2dU",
      name: "DHL",
      fee: 30,
    },
  ],
};

const shippingMethodSlice = createSlice({
  name: "shippingMethod",
  initialState,
  reducers: {
    selectShippingMethod: (state, action: PayloadAction<number>) => {
      state.selectedShipping = state.shippingMethods
        ? state.shippingMethods[action.payload]
        : null;
      console.log(state.selectedShipping);
    },
    clearSelectShippingMethod: (state) => {
      state.selectedShipping = null;
    },
  },
});

export const { selectShippingMethod, clearSelectShippingMethod } =
  shippingMethodSlice.actions;
export default shippingMethodSlice.reducer;
