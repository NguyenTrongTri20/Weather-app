import React, { useEffect } from 'react'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";



import SelectedWeather from './component/SelectedWeather/';
import Control from './component/Control';
import Week from './component/NearbyLocation';
import WeatherInfo from './component/WeatherInfo'


import {  useDispatch } from "react-redux"
import { getLocation } from './store/reducer/Location'
import { getWeather } from './store/reducer/Weather';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  bg:{
    backgroundColor:"#f6f6f7"
  },
}));


const TypographyStyle = {
  backgroundColor: '#fff', 
  height: '100vh'
}




function App() {
  const classes = useStyles();

  const dispatch = useDispatch()

  
  
  useEffect(()=>{
    dispatch(getLocation())
  dispatch(getWeather({lat : 10.75, lon : 106.6667}))
  },[dispatch])

  
  return (
    <React.Fragment>
      <CssBaseline />
        <Container >
          <Typography component="div" style={TypographyStyle} > 
            <div className={classes.root}>
              <Grid container spacing={0}>
                
                <Grid item xs={3}>
                  <SelectedWeather />

                </Grid>
                <Grid item xs={9} className={classes.bg}>
                  <div className="wrap">
                    <Control />
                    <Week />
                    
                    <span className="text">Today's Highlights</span>
                    
                    <WeatherInfo />
                  </div>
                </Grid>
                
              </Grid>
            </div>
          </Typography>
        </Container>
    </React.Fragment>
  );
}

export default App;
