import { createSlice } from "@reduxjs/toolkit";

const TemperatureSlice = createSlice({
    name:"Temperature",
    initialState:"C",
    reducers:{
        changeTemperature(state, action) {
            return action.payload
        }
    }
})

const { reducer, actions } = TemperatureSlice

export const { changeTemperature } = actions
export default reducer