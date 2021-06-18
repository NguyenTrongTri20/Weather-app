import React from 'react';

import Paper from '@material-ui/core/Paper';

import Sunny from '../../img/weather-icons/svg/sunny.svg'
import Cloud from '../../img/weather-icons/svg/black_low_cloud.svg'
import Rain from '../../img/weather-icons/svg/rain.svg'
import Snow from '../../img/weather-icons/svg/cloudy_with_heavy_snow.svg'
import SunAndCloud from '../../img/weather-icons/svg/mist.svg'
import { changeSelectedWeather } from '../../store/reducer/Weather';
import { useDispatch, useSelector } from "react-redux"



const weatherIcon = {
    with:"30px",
    height:"50px"
  }

function Location({locationName, weatherMain, temp, index}) {
    let icon = getIcon(weatherMain)
    const dispatch = useDispatch()
    const selectLocation = index => {
        const action =changeSelectedWeather(index)
        dispatch(action)
    }
    let temperatureType = useSelector(state => state.temperature)
    let temperatureMaxString ;
    let temperatureMinString
    if(temperatureType === "C"){
        temperatureMaxString = temperatureConvert(temp.temp_max) 
        temperatureMinString = temperatureConvert(temp.temp_min) 
    }else{
        temperatureMaxString = temperatureConvert(temp.temp_max, "F")
        temperatureMinString = temperatureConvert(temp.temp_min, "F")

    }
    return (
        <Paper elevation={1} onClick={()=>selectLocation(index)}  > 
            <div className="location-name">
            {locationName.length > 16 ? locationName.substring(0, 17) : locationName}
            </div>
            <div className="icon-weather">
                <img src={icon} alt="weather-icon" style={weatherIcon} />
            </div>
            <div className="temperature-range" style={{display: "flex"}}>
            <div className="max">{temperatureMaxString}&deg;</div>
            <div className="min">{temperatureMinString}&deg;</div>
            </div>
        </Paper>
    );
}
const temperatureConvert = (temperature,type = "C") =>{
    if(type === "C"){
        return Math.round(temperature - 273.15)
    }else{
        return (temperature - 273.15) * 1.8 +32
    }
}
const getIcon = (weatherMain) =>{

    if(weatherMain.toLowerCase().indexOf("sun") !== -1 && weatherMain.toLowerCase().indexOf("cloud") !== -1){
        return SunAndCloud
    }
    if(weatherMain.toLowerCase().indexOf("sun") !== -1 || weatherMain.toLowerCase().indexOf("clear") !== -1){
        return Sunny
    }else if(weatherMain.toLowerCase().indexOf("cloud") !== -1){
        return Cloud
    }else if(weatherMain.toLowerCase().indexOf("rain") !== -1){
        return Rain
    }else if(weatherMain.toLowerCase().indexOf("snow") !== -1){
        return Snow
    }
}
export default Location;