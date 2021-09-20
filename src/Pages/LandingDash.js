import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { CssBaseline, makeStyles } from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import Employees from './Employee/Employees';
import { styled, useTheme } from '@mui/material/styles';

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
  const sideMenuWidth = 240;

  const useStyles = makeStyles({
    appMain:{
      paddingLeft: sideMenuWidth,
      width: '100%',
    },
  });
  
  

  // const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  //   ({ theme, open }) => ({
  //     flexGrow: 1,
  //     padding: theme.spacing(3),
  //     transition: theme.transitions.create('margin', {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.leavingScreen,
  //     }),
  //     marginLeft: `-${drawerWidth}px`,
  //     ...(open && {
  //       transition: theme.transitions.create('margin', {
  //         easing: theme.transitions.easing.easeOut,
  //         duration: theme.transitions.duration.enteringScreen,
  //       }),
  //       marginLeft: 0,
  //     }),
  //   }),
  // );
  

export default function LandingDash() {
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
                <Employees/>
            </div>
            <CssBaseline/>
      </ThemeProvider>
    )
}
