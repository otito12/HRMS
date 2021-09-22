import { makeStyles, Paper, Typography } from '@material-ui/core';
import { GroupWorkRounded } from '@material-ui/icons';
import React from 'react';
import LoginButton from '../../components/LoginButton';
import SignupButton from '../../components/SignupButton';
import {useAuth0} from '@auth0/auth0-react';

const useStyles = makeStyles(theme => ({
    container:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100vh'
    },

    root:{
        width:'30%',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        padding:theme.spacing(3),
        '& .MuiSvgIcon-root':{
            fontSize: '7rem'
        }
    },
    link:{
        textDecoration: 'none'
    }
}));

export default function Login() {

    const classes = useStyles();
    const {user, isAuthenticated} = useAuth0();

    return (
        <div className={classes.container}>
            <Paper 
            className = {classes.root}
            elevation='6'
            >
                <GroupWorkRounded
                fontSize='large' 
                />
                <Typography
                    variant="h4"
                    align='center'
                    gutterBottom='true'
                >
                    Welcome to GHRMS
                </Typography>
                
                <Typography
                    variant="subtitle2"
                    align='center'
                    gutterBottom='true'
                >
                    Please login or create an account
                </Typography>
                <div style={{display:'flex', justifyContent:'center'}}>
                    {isAuthenticated? 
                        <div>
                            {JSON.stringify(user)}
                        </div>
                    :<LoginButton
                    color="default" 
                    text="Login"
                    /> }
                </div>
            </Paper>
        </div>
    )
}
