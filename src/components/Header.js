import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core';
import { AppBar, Grid, Toolbar,IconButton, Badge, InputBase } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#fff'
    },
    searchInput:{
        opacity: '0.6',
        padding: `${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight: theme.spacing(1)
        }
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Grid 
            container
            alignItems = "center">
                <Grid item>
                    <InputBase
                    placeholder="Search topics"
                    startAdornment= {<SearchIcon fontSize="small"/>}
                    className={classes.searchInput}/>
                </Grid>
                <Grid item sm></Grid>
                <Grid item>
                    <IconButton>
                        <Badge badgeContent={3} color="secondary">
                            <NotificationsNoneIcon fontSize="small"/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={4} color="secondary">
                            <ChatBubbleOutlineIcon fontSize="small"/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge color="secondary">
                            <PowerSettingsNewIcon fontSize="small"/>
                        </Badge>
                    </IconButton>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      
    );
  }
