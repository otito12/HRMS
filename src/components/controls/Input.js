import { FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from '@material-ui/core';
import React from 'react';

export default function TextFieldInput(props) {

    const{label,name, value,onChange,error=null, ...other} = props
    return (
        
        <TextField
            variant="outlined"
            label = {label}
            name= {name}
            value={value}
            onChange = {onChange}
            {...other}
            {...(error && {error:true, helperText:error})}
        />
    )
}


