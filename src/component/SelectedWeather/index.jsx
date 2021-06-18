import React from 'react';

import WeatherIcon from './WeatherIcon';
import SearchLocation from './SearchLocation';
import WeatherMain from './WeatherMain';
import Location from './Location';
import { useSelector } from "react-redux"

function SelectedWeather(props) {
    const weatherInfo = useSelector(state => state.weather)
    if(!weatherInfo){
      return null
    }
    const { name, sys, main, dt, weather  } = weatherInfo[0]
    return (
        <React.Fragment>
            <div className="selected-weather">

              <SearchLocation 
                    
              />

              <WeatherIcon 
                weatherMain={weather[0].main}
              />

              <WeatherMain 
                temperature={main.temp}
                dateTime={dt}
                weather={weather[0]}
              />
              
              <Location 
                name={name}
                country={sys.country}
              />
            </div>
        </React.Fragment>
    );
}

export default SelectedWeather;