import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { CssBaseline, makeStyles } from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import Employees from './Employee/Employees';
import { styled, useTheme } from '@mui/material/styles';
import Profile from './Profile/Profile';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom';


const theme = createTheme({
    palette:{
      primary:{
        main:"#333996",
        light: "#3c44b126"
      },
      secondary:{
        main:"#f83245",
        light: "#f8324526"
      }
    },
    background:{
      default:"#f4f5fd"
    },
    overrides:{
      MuiAppBar:{
        root:{
          transform:'translateZ(0)'
        }
      }
    }
  });
  const sideMenuWidth = 280;

  const useStyles = makeStyles({
    appMain:{
      paddingLeft: sideMenuWidth,
      width: '100%',
    },
  });

export default function LandingDash() {
    
    const {path, url} = useRouteMatch();
    const classes = useStyles();
    const [openSideMenu, setOpenSideMenu] = useState(true);
    const handleDrawerOpen = () => {
      openSideMenu? setOpenSideMenu(false):setOpenSideMenu(true);
    };
    return (
        
          <ThemeProvider theme={theme}>
              <SideMenu
              openState={openSideMenu}
              closeSideMenu={handleDrawerOpen}
              width={sideMenuWidth}/>
              <div className={classes.appMain}
                style={{paddingLeft: openSideMenu?sideMenuWidth:0}}
              >
                  <Header
                  openSideMenu={handleDrawerOpen}
                  />
                  <Link to={`${url}`}>We</Link>
                  <br/>
                  <Link to={`${url}`}>Proceed</Link>
                  <Switch>
                    <Route path={`${path}/Directory`} component={Employees}/> 
                    <Profile/>
                  </Switch>
              </div>
              <CssBaseline/>
          </ThemeProvider>
        
    )
}


      
        
      
    
