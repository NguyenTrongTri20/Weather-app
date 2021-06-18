import React from 'react';
import {WiWindDeg} from 'react-icons/wi'
import Paper from '@material-ui/core/Paper';

function WindStatus({speed, deg}) {
    return (
        <Paper elevation={1}>
            <div className="card-info">
                <div className="card-title">Wind Status</div>
                <div className="card-content">
                
                    <div className="status">
                    <span className="status-main">{speed}</span> <span style={{fontWeight:"500", marginLeft:"8px", fontSize:"18px"}}>km/h</span>
                    <div className="other-info"> <WiWindDeg className="other-icon" /> <span className="other-value">{deg}</span></div>
                    </div>

                </div>
                
            </div>
        </Paper>
    );
}

export default WindStatus;