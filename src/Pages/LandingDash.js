import React from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { CssBaseline, makeStyles } from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import Employees from './Employee/Employees';

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
  
  const useStyles = makeStyles({
    appMain:{
      paddingLeft: '320px',
      width: '100%'
    },
  });

export default function LandingDash() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <SideMenu/>
            <div className={classes.appMain}>
                <Header/>
                <Employees/>
            </div>
            <CssBaseline/>
      </ThemeProvider>
    )
}
