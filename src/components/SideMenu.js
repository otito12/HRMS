import { withStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { GroupWorkRounded } from '@material-ui/icons';
import ViewListIcon from '@mui/icons-material/ViewList';
import TelegramIcon from '@mui/icons-material/Telegram';
import WorkIcon from '@mui/icons-material/Work';
import {useRouteMatch, Link } from 'react-router-dom';

const style= {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        height: '100%',
        // backgroundColor: '#253053'
    }
};

const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor: '#253053'
    }
}));

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  }));

const SideMenu = (props) => {

    const {classes, width, openState,closeSideMenu, ...other} = props;
    const theme = useTheme();
    let classea = useStyles();
    const {path, url} = useRouteMatch();

    return (
        
        <div className={classes.sideMenu}
            style={{width:width}}>
            <Drawer
                sx={{
                width: width,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: width,
                    boxSizing: 'border-box',
                    backgroundColor: '#253053',
                },
                }}
                variant="persistent"
                anchor="left"
                open={openState}
            >
                <DrawerHeader>
                    <div 
                    style={{
                        display: 'flex',
                        alignItems: 'center'                    
                    }}>
                        <GroupWorkRounded
                        fontSize='large' 
                        style={{color:'white'}}
                        />
                        <Typography
                        sx={{color: 'white', ml:2}}>
                        GHMS</Typography>
                    </div>
                    <IconButton onClick={closeSideMenu}
                    style={{color:'white'}}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link to={`${url}/Directory`}>
                        <ListItem button key="Directory">
                            <ListItemIcon
                                sx={{color: 'white'}}
                            >
                                <ViewListIcon/>
                            </ListItemIcon>
                            <ListItemText 
                                sx={{color: 'white'}}
                                primary="Directory" />
                        </ListItem>
                    </Link>
                    <Link to={`${url}`}>
                        <ListItem button key="Messenger">
                            <ListItemIcon
                                sx={{color: 'white'}}
                            >
                                <TelegramIcon/>
                            </ListItemIcon>
                            <ListItemText 
                                sx={{color: 'white'}}
                                primary="Messenger" />
                        </ListItem>
                    </Link>
                    <Link 
                    style={{ textDecoration: 'none' }}
                    to={`${url}`}>
                        <ListItem button key="Staffing">
                            <ListItemIcon
                                sx={{color: 'white'}}
                            >
                                <WorkIcon/>
                            </ListItemIcon>
                            <ListItemText 
                                sx={{color: 'white'}}
                                primary="Staffing" />
                        </ListItem>
                    </Link>
                </List>         
            </Drawer>

        </div>
    )
}

export default withStyles(style)(SideMenu);

