import { createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "../utils";

const initialState = {
  posts: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export function SetPosts(post) {
  return (dispatch, getState) => {
    dispatch(postSlice.actions.getPosts(post));
  };
}

export function getPosts() {
  return async (dispatch) => {
    try {
      const response = await apiRequest("GET", "/posts");
      dispatch(postSlice.actions.getPosts(response.data));
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
}
