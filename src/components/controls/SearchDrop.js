import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchDrop(props) {
  const { inputLabel, options, ...other } = props;
  return (
    <Autocomplete
      disablePortal
      options={options}
      {...other}
      renderInput={(params) => <TextField {...params} label={inputLabel} />}
    />
  );
}
