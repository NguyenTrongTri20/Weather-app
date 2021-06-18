import React from 'react';
import Sunny from '../../img/weather-icons/svg/sunny.svg'
import Cloud from '../../img/weather-icons/svg/black_low_cloud.svg'
import Rain from '../../img/weather-icons/svg/rain.svg'
import Snow from '../../img/weather-icons/svg/cloudy_with_heavy_snow.svg'
import SunAndCloud from '../../img/weather-icons/svg/mist.svg'

function WeatherIcon({weatherMain}) {
    let icon = getIcon(weatherMain)
    return (
        
        <div className="icon-weather">
            <img src={icon} alt="icon-weather" style={{width:"200px"}} />
            
        </div>
    );
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

export default WeatherIcon;