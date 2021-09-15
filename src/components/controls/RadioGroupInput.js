import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React from 'react';

export default function RadioGroupInput(props) {

    const{label,name, value,onChange,items} = props
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
                <RadioGroup row
                    name={name}
                    value={value}
                    onChange={onChange}>
                    {items.map(items =>(
                        <FormControlLabel
                        value={items.id}
                        key={items.id}
                        control={<Radio/>}
                        label={items.title}
                        
                        />
                    ))}
                </RadioGroup>
        </FormControl>
    )
}