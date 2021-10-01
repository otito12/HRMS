import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root:{
        margin: theme.spacing(1)
    },
    label:{
        textTransform:'none'
    }
}));

export default function InputButton(props) {
    
    const{text ,children,size, color,variant,onClick, ...other } = props
    const classes = useStyles();
    return (
        <Button 
        size = {size|| "large"}
        color= {color || "primary"}
        variant= {variant || "contained"}
        onClick = {onClick}
        {...other}
        classes={{root:classes.root,label:classes.label}}>
            {children}{text}
        </Button>
    )
}
