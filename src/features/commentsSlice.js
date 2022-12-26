import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commertsService } from "../service";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommnets.pending, (state, action) => {})
      .addCase(getCommnets.rejected, (state, action) => {})
      .addCase(getCommnets.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});
export const getCommnets = createAsyncThunk("comments", async (slug) => {
  const response = await commertsService.getComments(slug);
  return response.data.comments;
});
