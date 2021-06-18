import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Location from './NearbyLocation';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    bg:{
      backgroundColor:"#f6f6f7"
    },
    // day of week
    location:{
      display: 'flex',
      // flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
        width: theme.spacing(16),
        height: theme.spacing(17),
        borderRadius: theme.spacing(2),
        cursor: "pointer",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "space-evenly",
      },
      marginTop:theme.spacing(3),
      marginBottom: theme.spacing(5)
    }
  }));

function NearbyLocation(props) {


  const classes = useStyles()
  
  let nearbyLocation
  

  const listLocation = useSelector(state =>  state.weather)
  
  if(!listLocation) return null
  
  if(listLocation){
    
    nearbyLocation = listLocation.map((location, index) => {
      return <Location 
                key={location.id} 
                locationName={location.name} 
                weatherMain={location.weather[0].main} 
                temp={location.main}
                index={index}
              />
    })
    nearbyLocation.shift()
    nearbyLocation.shift()
  }
  
  return (
      <div className={`NearbyLocation ${classes.location}`}>
          {nearbyLocation}
      </div>
  );
}

export default NearbyLocation;