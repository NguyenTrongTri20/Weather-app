import React from 'react';
import {HiOutlineEmojiSad} from "react-icons/hi"
import {BiSmile} from 'react-icons/bi'

import Paper from '@material-ui/core/Paper';
import Comment from './Comment';

function Weather({weatherInfo}) {

    const { rain, snow } = weatherInfo
    
    let title ;
    let volume = 0;
    let oneHour = "1h"
    if(rain){
        title = "Rain";
        volume = rain[oneHour]
    }else if(snow){
        title = "Snow";
        volume = snow[oneHour]
    }

    return (
        <Paper elevation={1}>
            <div className="card-info">
                <div className="card-title">{`${title ? title + " volume" : "No rain, No snow"} `}</div>
                <div className="card-content">
                
                    <div className="status">
                        <span className="status-main">{volume}</span> 
                        <span style={{fontWeight:"500"}}>m.m</span>
                        {getComment(volume, title)} 
                    </div>
                </div>
            </div>
        </Paper>
    );
}
const getComment = (volume, title) => {
    if(volume === 0 ){
        return <Comment title="So good" Icon={BiSmile} />
    }
    else if(volume <= 100){
        return <Comment title={`Small ${title}`} Icon={BiSmile} />
    }else{
        return <Comment title={`Heavy ${title}`} Icon={HiOutlineEmojiSad} />
    }
}

export default Weather;