import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

export default function SelectInput(props) {

    const {label,name,value,onChange,items, error=null} = props;

    return (
        <FormControl
        {...(error && {error:true, helperText:error})}
        variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          label={label}
          value={value}
          onChange={onChange}
        >
            <MenuItem value="">None</MenuItem>
          {items.map(item=>(
            <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText> }
      </FormControl>
    )
}
