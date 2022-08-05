import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncGallery = createAsyncThunk(
    "gallery/fetchAsyncGallery",
    async (section, sort, window, viral) => {
        const response = await axios.get(`https://api.imgur.com/3/gallery/${section}/${sort}/${window}/1?showViral=${viral}`, {
            headers: {
                contentType: 'application/json',
                Authorization: "Client-ID 7d18d8f35ea8c7d"
            }
        })
        return response.data
    }
)


const initialState = {
    gallery: {},
    image: {},
    loading: true
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
            return {...state, gallery: payload, loading: false}
        },
        [fetchAsyncGallery.rejected]: () => {
            console.log('rejected');
        },
      
    }
})

export const getGallery = (state) => state.gallery.gallery
export const getLoading = (state) => state.gallery.loading
export default gallerySlice.reducer