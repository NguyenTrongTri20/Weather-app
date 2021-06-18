import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"




export const getWeather = createAsyncThunk('weatherInfo/getInfo', async ({lat , lon})=>{
    const APIKey = "46c3495aa976d8faad7472340a85b8f1"
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=9&appid=${APIKey}`)
    return response.json()
})

const weatherSlice = createSlice({
    name:"weatherInfo",
    initialState: null,
    reducers:{
        changeSelectedWeather(state, action){
            let index = action.payload
            const newState = [...state]
            let selectedLocation = newState.splice(index, 1)[0]
            newState.unshift(selectedLocation)
            return newState
        }
    },
    extraReducers:{
        [getWeather.pending]:(state)=>{
            console.log("fetch...");
        },
        [getWeather.fulfilled]:(state, action)=>{
            state = action.payload.list
            return state
        },
        [getWeather.rejected]:()=> {
            console.log("fail")
        }
    }
})

const {reducer, actions} = weatherSlice
export const {changeSelectedWeather} = actions
export default reducer