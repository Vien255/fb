import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { acticlesService } from "../service";

export const acticlesSlice = createSlice({
  name: "acticles",
  initialState: {
    acticles: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActicles.pending, (state, action) => {})
      .addCase(getActicles.rejected, (state, action) => {})
      .addCase(getActicles.fulfilled, (state, action) => {
        state.acticles = action.payload;
      });
  },
});

export const getActicles = createAsyncThunk("acticles", async () => {
  const response = await acticlesService.getActicles();
  return response.data.articles;
});
