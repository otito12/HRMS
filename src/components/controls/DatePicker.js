import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import React from 'react';


export default function DatePicker(props) {

    const{label,name, value,onChange} = props

    const convertToDefEvent = (name,value) =>({
        target:{
            name, value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker 
            disableToolbar variant="inline" 
            inputVariant="outlined"
            label = {label}
            format="MMM/dd/yyyy"
            name= {name}
            value={value}
            onChange = {date => onChange(convertToDefEvent(name,date))}
            />
        </MuiPickersUtilsProvider>
    )
}
