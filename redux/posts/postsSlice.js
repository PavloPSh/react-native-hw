import {
    fetchPosts,
    addPost,
    fetchAllPosts,
    fetchPostCommnets,
  } from "./postsOperations";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  allItems: [],
  comments: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchAllPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allItems = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addPost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(fetchPostCommnets.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchPostCommnets.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.comments = action.payload;
    })
    .addCase(fetchPostCommnets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const postsReduser = postsSlice.reducer;