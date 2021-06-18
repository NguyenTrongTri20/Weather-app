import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Location from './Location'
import Sun from './Temperature';
import WindStatus from './WindStatus';
import Visibility from './Weather.jsx';
import Humidity from './Humidity';
import Cloud from './Cloud';
import { useSelector } from "react-redux"

const dayInfoStyle = makeStyles(theme => ({
    info:{
      display: 'flex',
      justifyContent:"center",
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1.5),
        width: theme.spacing(30),
        height: theme.spacing(22),
        borderRadius: theme.spacing(2),
        cursor: "pointer",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        // justifyContent: "space-between",
      },
      marginTop:theme.spacing(1),
    }
  }))

function WeatherInfo(props) {
    const cardInfo = dayInfoStyle()
    const weatherInfo = useSelector(state => state.weather)
    if(!weatherInfo) return null
    const { wind, main, clouds, coord, name, rain, snow  } = weatherInfo[0]
    console.log(rain);
    console.log(snow);
    return (
        <div className={`today-info ${cardInfo.info}`}>           
            <Location 
              lat={coord.lat}
              lon={coord.lon}
              locationName={name}
            />
            
            <WindStatus 
                speed={wind.speed}
                deg = {wind.deg}
            />
            
            <Sun 
              temp_max={main.temp_max}
              temp_min={main.temp_min}
            />
            
            <Humidity 
              Humidity={main.humidity}
            />
            
            <Visibility 
              weatherInfo={{rain, snow}}
              
            />
            
            <Cloud 
              cloud={clouds.all}
            />
            
              
      </div>
    );
}

export default WeatherInfo;