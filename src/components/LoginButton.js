import { Button, makeStyles } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root:{
        margin: theme.spacing(1)
    },
    label:{
        textTransform:'none'
    }
}));

export default function LoginButton(props) {
    const {loginWithRedirect} = useAuth0();
    const{text ,size, color,variant,onClick, ...other } = props
    const classes = useStyles();
    return (
        <Button 
        size = {size|| "large"}
        color= {color || "primary"}
        variant= {variant || "contained"}
        onClick = {()=> loginWithRedirect()}
        {...other}
        classes={{root:classes.root,label:classes.label}}>
            {text}
        </Button>
    )
}

