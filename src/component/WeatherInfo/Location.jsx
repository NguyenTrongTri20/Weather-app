import React from 'react';
import Paper from '@material-ui/core/Paper';
import {FaCompass} from 'react-icons/fa'



function Location({lat, lon, locationName}) {
    return (
        <Paper elevation={1}>
            <div className="card-info">
                <div className="card-title">Location</div>
                <div className="card-content">
                    <div className="status">
                        <div className="location-name">{locationName.length > 16 ? locationName.substring(0, 17) : locationName}</div>
                        <div className="position">
                            <div className="lat">Lat: {lat}</div>
                            <div className="lon">Lon: {lon}</div>
                        </div>
                        
                        <FaCompass style={{position:"absolute",right:"0px",top:"0px", fontSize:"55px", color:"rgb(102, 102, 240)"}}/>
                       
                    </div>
                </div> 
            </div>
        </Paper>
    );
}

export default Location;