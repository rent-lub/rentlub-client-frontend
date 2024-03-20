import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  selectStartDate: Date | null;
  selectEndDate: Date | null;
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
        selectStartDate: Date | null;
      }>
    ) => {
      state.selectStartDate = action.payload.selectStartDate;
      return state;
    },
    setSelectEndDate: (
      state,
      action: PayloadAction<{
        selectEndDate: Date | null;
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
