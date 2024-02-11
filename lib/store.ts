import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/postsSlice";
import searchDateReducer from "./features/searchDateSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      searchDate: searchDateReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
