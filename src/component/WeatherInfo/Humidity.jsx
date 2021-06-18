import React from 'react';
import {AiFillLike} from 'react-icons/ai'
import {WiHumidity} from 'react-icons/wi'
import Paper from '@material-ui/core/Paper';
import {HiOutlineEmojiSad} from "react-icons/hi"
import Comment from './Comment';

function Humidity({Humidity}) {
    
    return (

        <Paper elevation={1}>
            <div className="card-info">
                <div className="card-title">Humidity</div>
                <div className="card-content">
                    <div className="status">
                        <span className="status-main">{Humidity}</span> 
                        <sup style={{fontWeight:"500", fontSize:"30px", position:"absolute",top:"7px"}}>%</sup>

                        <WiHumidity style={{position:"absolute",right:"0px",top:"-5px", fontSize:"80px", color:"rgb(102, 102, 240)"}}/>
                        {getComment(Humidity)}
                    </div>

                </div>
            </div>
        </Paper>
    );
}

const getComment = humidity => {
    if(humidity > 80){
        return <Comment title="Too high" Icon={HiOutlineEmojiSad}/>
    }else if(humidity <= 80 && humidity >= 40){
        return <Comment title="Normal" Icon={AiFillLike}/>
    }else{
        return <Comment title="Too dry" Icon={HiOutlineEmojiSad}/>
    }
}


export default Humidity;