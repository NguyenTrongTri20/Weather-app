import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getLocation = createAsyncThunk('location/getLocation', async () => {
    const response = await axios.get('./data.json')
    return response.data
})



const locationSlice = createSlice({
    name:"location",
    initialState:[],
    reducers:{
        getData(state, action){

        }
    },
    extraReducers:{
        [getLocation.pending] : (state, action ) =>{
            console.log("Pending");
        },
        [getLocation.fulfilled]: (state, action) => {
            state = action.payload
            return state
        },
        [getLocation.rejected]: (state, action) => {
            console.log("fail");
        }
    }
})


const { reducer, actions } = locationSlice

export const { getData } = actions

export default reducer
