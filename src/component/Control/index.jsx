import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { changeTemperature } from '../../store/reducer/Temperature';
import { useDispatch } from 'react-redux';

const avatarStyle = {
    fontSize:"16px",
    fontWeight:"500",
    color:"#000",
    backgroundColor:"#fff"
  }

function Control(props) {
    const dispatch = useDispatch()
    const handleChangeTemp =  type => {
        const action = changeTemperature(type)
        dispatch(action)
    }

    return (
        <div className="control">
            <div className="type-select">
                <div className="date-option ">Nearby Location</div>
            </div>
            <div className={`temperature-setting `} >
                <div className="temperature-c " onClick={()=>handleChangeTemp("C")}><Avatar style={avatarStyle}>&deg;C</Avatar></div>
                <div className="temperature-f" onClick={()=>handleChangeTemp("F")}><Avatar style={avatarStyle}>&deg;F</Avatar></div>
            </div>
            
        </div>
    );
}

export default Control;