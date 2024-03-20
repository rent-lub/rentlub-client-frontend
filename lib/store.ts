import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/postsSlice";
import searchDateReducer from "./features/searchDateSlice";
import bottomSheetReducer from "./features/bottomSheetSlice";
import calendarReducer from "./features/calendarSlice";
import LIFFProfileSlice from "./features/LIFFProfileSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      searchDate: searchDateReducer,
      bottomSheet: bottomSheetReducer,
      customCalendar: calendarReducer,
      LIFFProfile: LIFFProfileSlice,
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
