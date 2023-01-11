import React from "react";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
const CheckboxInput = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <TextField
        id="standard-basic"
        variant="outlined" 
        style={{ width: "100%" }}
      />
    </>
  );
};

export default CheckboxInput;
