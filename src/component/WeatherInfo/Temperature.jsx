import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';
import { useSelector } from "react-redux"

function Sun({temp_max, temp_min}) {
    
    
    let temperatureType = useSelector(state => state.temperature)
    let temperatureMaxString ;
    let temperatureMinString
    if(temperatureType === "C"){
        temperatureMaxString = temperatureConvert(temp_max) 
        temperatureMinString = temperatureConvert(temp_min) 
    }else{
        temperatureMaxString = temperatureConvert(temp_max, "F")
        temperatureMinString = temperatureConvert(temp_min, "F")

    }
    return (
        <Paper elevation={1}>
            <div className="card-info">
                <div className="card-title">Temperature</div>
                <div className="card-content">
                    <div className="status">
                        <div className="temp-max">
                            <Avatar style={{color:"#fff", backgroundColor:"#fbbc2e",marginBottom:"15px", border:"3px solid rgba(254, 163, 31, .5)" }}>
                                <ArrowUpwardIcon style={{fontSize:"20px", fontWeight:"600"}}/>
                            </Avatar>
                            <span className="temp">Max: {temperatureMaxString}&deg;{temperatureType === "C" ? "C" : "F"}</span>
                        </div>

                        <div className="temp-min">
                            <Avatar style={{color:"#fff", backgroundColor:"#fbbc2e", border:"3px solid rgba(254, 163, 31, .5)"}}>
                                <ArrowDownwardIcon style={{fontSize:"20px", fontWeight:"600"}}/>
                                
                            </Avatar>
                            <span className="temp">Min: {temperatureMinString}&deg;{temperatureType === "C" ? "C" : "F"}</span>
                        </div>
                    </div>
                </div>
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

export default Sun;