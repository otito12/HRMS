import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core';
import React from 'react'; 
import { Form } from '../useForm';

export default function CheckInput(props) {
    const {label,name, value,onChange} = props

    const convertToDefEvent = (name,value) =>({
        target:{
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
            control={<Checkbox 
                checked={value}
                onChange={e => onChange(convertToDefEvent(name,e.target.checked))} 
                name={name} />}
            label={label}
            />
        </FormControl>
        
      
    )
}
