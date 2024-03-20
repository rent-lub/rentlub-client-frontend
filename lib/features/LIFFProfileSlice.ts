import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LIFFProfile {
  id: string | null;
  profileURL: string | null;
  userToken: string | null;
  displayName: string | null;
  accessToken: string | null;
}

const initialState: LIFFProfile = {
  id: null,
  profileURL: null,
  userToken: null,
  displayName: null,
  accessToken: null,
};

const LIFFProfileSlice = createSlice({
  name: "LIFFProfile",
  initialState,
  reducers: {
    setLIFFProfile: (state, action: PayloadAction<LIFFProfile>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLIFFProfile } = LIFFProfileSlice.actions;
export default LIFFProfileSlice.reducer;
