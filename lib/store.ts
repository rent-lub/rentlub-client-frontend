import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/postsSlice";
import searchDateReducer from "./features/searchDateSlice";
import bottomSheetReducer from "./features/bottomSheetSlice";
import calendarReducer from "./features/calendarSlice";
import LIFFProfileReducer from "./features/LIFFProfileSlice";
import shippingMethodReducer from "./features/shippingMethodSlice";
import shopReducer from "./features/shopSlice";
import MyOrderReducer from "./features/myOrderSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      searchDate: searchDateReducer,
      bottomSheet: bottomSheetReducer,
      customCalendar: calendarReducer,
      LIFFProfile: LIFFProfileReducer,
      shippingMethod: shippingMethodReducer,
      shop: shopReducer,
      myOrder: MyOrderReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
