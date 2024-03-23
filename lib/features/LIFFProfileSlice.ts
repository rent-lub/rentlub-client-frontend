import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface LIFFProfile {
  id: string | null;
  profileURL: string | null;
  userToken: string | null;
  displayName: string | null;
  accessToken: string | null;
  isVerify: boolean | null;
}

const initialState: LIFFProfile = {
  id: null,
  profileURL: null,
  userToken: null,
  displayName: null,
  accessToken: null,
  isVerify: null,
};

const LIFFProfileSlice = createSlice({
  name: "LIFFProfile",
  initialState,
  reducers: {
    setLIFFProfile: (state, action: PayloadAction<LIFFProfile>) => {
      state = action.payload;
      return state;
    },
    setIsVerify: (state, action: PayloadAction<boolean>) => {
      state.isVerify = action.payload;
    },
  },
});

export const { setLIFFProfile, setIsVerify } = LIFFProfileSlice.actions;
export default LIFFProfileSlice.reducer;
