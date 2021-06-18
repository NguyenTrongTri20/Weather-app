import React from 'react';
// import { WiRain } from 'react-icons/wi'
import { IoIosSunny } from 'react-icons/io'
import { IoIosPartlySunny } from 'react-icons/io'
import { WiDaySnow } from 'react-icons/wi'
import { WiDayShowers } from 'react-icons/wi'
import { WiDayCloudy } from 'react-icons/wi'
import { useSelector } from 'react-redux';


function WeatherMain({temperature, dateTime, weather }) {
    let currentDate = new Date(dateTime * 1000)
    let dayOfWeek = getDayOfWeek(currentDate.getDay())
    let fullHours = getTime(currentDate)

    let temperatureType = useSelector(state => state.temperature)
    let temperatureString ;
    if(temperatureType === "C"){
        temperatureString = temperatureConvert(temperature) 
    }else{
        temperatureString = temperatureConvert(temperature, "F")
    }
    return (
        
        <React.Fragment>
            <div className="temperature">
                {temperatureString}&deg;{temperatureType === "C" ? "C" : "F"}
            </div>

            <div className="date-time">
                {dayOfWeek}, <span className="time">{fullHours}</span>
            </div>

            <hr />

            <div className="weather-main">
                {getIcon(weather.main)}
                <div className="weather-info">
                    {weather.main}
                </div>
            </div>

            <div className="weather-main">
                {getIcon(weather.description)}
                <div className="weather-info">
                    {weather.description}
                </div>
            </div>
        </React.Fragment>
    );
}

const temperatureConvert = (temperature,type = "C") =>{
    if(type === "C"){
        return Math.round(temperature - 273.15)
    }else{
        return (temperature - 273.15) * 1.8 +32
    }
}

const getTime = (date) =>{
    return `${date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes(): "0"+date.getMinutes()}`
}

const getDayOfWeek = (value) => {
    switch (value) {
        case 0:
            return "Sunday" 
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        default:
            return "Saturday"
    }
}
const getIcon = (weather) =>{

    if(weather.toLowerCase().indexOf("sun") !== -1 && weather.toLowerCase().indexOf("cloud") !== -1){
        return <IoIosPartlySunny  className="icon"/>
    }
    if(weather.toLowerCase().indexOf("sun") !== -1 || weather.toLowerCase().indexOf("clear") !== -1){
        return <IoIosSunny  className="icon"/>
    }else if(weather.toLowerCase().indexOf("cloud") !== -1){
        return <WiDayCloudy  className="icon"/>
    }else if(weather.toLowerCase().indexOf("rain") !== -1){
        return <WiDayShowers  className="icon"/>
    }else if(weather.toLowerCase().indexOf("snow") !== -1){
        return <WiDaySnow className="icon"/>
    }
}
export default WeatherMain;

