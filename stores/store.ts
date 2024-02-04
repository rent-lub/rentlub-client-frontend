import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
