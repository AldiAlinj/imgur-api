import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncGallery = createAsyncThunk(
  "gallery/fetchAsyncGallery",
  async (parameters) => {
    const url = `https://api.imgur.com/3/gallery/${parameters.section}/${parameters.sort}/${parameters.window}/1?showViral=${parameters.viral}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: "Client-ID 7d18d8f35ea8c7d",
      },
    });
    return response.data;
  }
);

const initialState = {
  gallery: {},
  image: {},
  loading: true,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addImage: (state, {payload}) => {
      state.image = payload
    },
    removeImage: (state) => {
      state.image = {}
    },
    
  },
  extraReducers: {
    [fetchAsyncGallery.pending]: (state) => {
      console.log("Gallery Pending");
      return { ...state, loading: true };
    },
    [fetchAsyncGallery.fulfilled]: (state, { payload }) => {
      console.log("Gallery Fetched");
      return { ...state, gallery: payload, loading: false };
    },
    [fetchAsyncGallery.rejected]: () => {
      console.log("Gallery Rejected");
    },
  },
});

export const {removeImage, addImage} = gallerySlice.actions
export const getGallery = (state) => state.gallery.gallery;
export const getImage = (state) => state.gallery.image;
export const getLoading = (state) => state.gallery.loading;
export default gallerySlice.reducer;
