import React from 'react';
import {AiFillLike} from 'react-icons/ai'

import { WiCloudy} from 'react-icons/wi'
import { AiFillDislike } from "react-icons/ai"

import Paper from '@material-ui/core/Paper';
import Comment from './Comment';
function Cloud({cloud}) {
    return (
        <Paper elevation={1}>
            <div className="card-info">
                <div className="card-title">Cloud</div>
                <div className="card-content">
                
                    <div className="status">
                        <span className="status-main">{cloud}</span> 
                        <sup style={{fontWeight:"500", fontSize:"30px", position:"absolute",top:"7px"}}>%</sup>
                        <WiCloudy style={{position:"absolute",right:"0px",top:"-15px", fontSize:"90px", color:"rgb(102, 102, 240)"}}/>
                        {getComment(cloud)} 
                    </div>

                </div>
            </div>
        </Paper>
    );
}

const getComment = cloud => {
    if(cloud >= 60 ){
        return <Comment title="Cloudy" Icon ={AiFillDislike} />
    }else if ( cloud < 60 && cloud >= 40){
        return <Comment title="Normal" Icon={AiFillLike} />
    }else{
        return <Comment title="Clear sky" Icon={AiFillLike} />
    }
}

export default Cloud;