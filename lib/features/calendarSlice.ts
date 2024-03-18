import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  selectStartDate: string | null;
  selectEndDate: string | null;
} = {
  selectStartDate: null,
  selectEndDate: null,
};

const calendarSlice = createSlice({
  name: "calendarSlice",
  initialState,
  reducers: {
    setSelectStartDate: (
      state,
      action: PayloadAction<{
        selectStartDate: string | null;
      }>
    ) => {
      state.selectStartDate = action.payload.selectStartDate;
      return state;
    },
    setSelectEndDate: (
      state,
      action: PayloadAction<{
        selectEndDate: string | null;
      }>
    ) => {
      state.selectEndDate = action.payload.selectEndDate;
      return state;
    },
    clearAllSelectDate: (state) => {
      state.selectStartDate = null;
      state.selectEndDate = null;
    },
  },
});

export const { setSelectStartDate, setSelectEndDate, clearAllSelectDate } =
  calendarSlice.actions;
export default calendarSlice.reducer;
