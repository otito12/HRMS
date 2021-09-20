import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core';
import { AppBar, Grid, Toolbar,IconButton, Badge, InputBase } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import Controls from './controls/Controls';
import { useAuth0 } from '@auth0/auth0-react';
import MenuIcon from '@mui/icons-material/Menu';

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

export default function Header(props) {
    const classes = useStyles();
    const {logout} = useAuth0();
    const {openSideMenu} = props;
    return (
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Grid 
            container
            alignItems = "center">
                <Grid item>
                <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    onClick={() => openSideMenu()}
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    
                >
                    <MenuIcon />
                </IconButton>
                </Grid>
                <Grid item>
                    <InputBase
                    placeholder="Search topics"
                    startAdornment= {<SearchIcon fontSize="small"/>}
                    className={classes.searchInput}/>
                </Grid>
                <Grid item sm></Grid>
                <Grid 
                direction='column'
                >
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
                    <Controls.AccountMenu
                    logoutFunc= {logout}
                    />
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      
    );
  }
