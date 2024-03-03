import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const bottomSheetSlice = createSlice({
  name: "bottomSheet",
  initialState,
  reducers: {
    trigger: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { trigger } = bottomSheetSlice.actions;
export default bottomSheetSlice.reducer;
