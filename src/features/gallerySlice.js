import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncGallery = createAsyncThunk(
    "gallery/fetchAsyncGallery",
    async () => {
        const response = await axios.get(`https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true`, {
            headers: {
                Authorization: "Client-ID 7d18d8f35ea8c7d"
            }
        })
        return response.data
    }
)


const initialState = {
    gallery: {},
    image: {}
}



const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAsyncGallery.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncGallery.fulfilled]: (state, {payload}) => {
            console.log('fetched');
            return {...state, gallery: payload}
        },
        [fetchAsyncGallery.rejected]: () => {
            console.log('rejected');
        },
      
    }
})

export const getGallery = (state) => state.gallery.gallery
export default gallerySlice.reducer