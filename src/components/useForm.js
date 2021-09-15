import { makeStyles } from '@material-ui/core';
import React, {useState,useEffect} from 'react';

export function useForm(initialFValues, validateOnChange=false,validate) {
    
    const [values, setValues] = useState(initialFValues);
    const [errors , setErrors] = useState({});

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
        console.log(`${value}`)
        if (validateOnChange)
            validate({[name]: value})
    }
    
    const resetForm = () => {
        setValues(initialFValues);
        setErrors({});
    }
    
    return {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    }
}

const useStyles = makeStyles(theme => ({
    root:{

    '& .MuiFormControl-root':{
        width: '80%',
        margin: theme.spacing(1)
    }

    }
}));

export function Form(props) {
    const classes = useStyles();
    const {children, ...other} = props;

    return (
        <form className = {classes.root} {...other}>
            {props.children}
        </form>
    )
}
