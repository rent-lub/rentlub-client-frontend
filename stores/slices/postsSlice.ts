import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = [
  {
    id: 1,
    title: "init post",
    description: "init description",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    deletePost: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      return state.filter((post: any) => post.id === postId);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
