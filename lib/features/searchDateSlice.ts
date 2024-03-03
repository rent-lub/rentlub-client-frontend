import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const searchDateSlice = createSlice({
  name: "searchDate",
  initialState,
  reducers: {
    trigger: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      console.log(state);
      return state;
    },
  },
});

export const { trigger } = searchDateSlice.actions;
export default searchDateSlice.reducer;
