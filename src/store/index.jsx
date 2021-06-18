import  { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit"
import location from "./reducer/Location"
import weather from './reducer/Weather'
import temperature from './reducer/Temperature'


const store = configureStore({
    reducer:{
        location,
        weather,
        temperature,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
      })
})

export default store