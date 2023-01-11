import React, { useState } from "react";
import { TextField } from "@mui/material";

const TextInput = ({clean}) => {
  const [values, setValues] = useState("");
  const [bool, setBool] = useState("");
  React.useEffect(()=> {
    setBool(clean)
        setValues('')
  }, [clean])

  React.useEffect(()=> {
    if(bool === clean){
      setValues('')
    }
  }, [clean])
  return (
    <TextField
      id="standard-basic-eee"
      variant="outlined"
      value={values}
      style={{ width: "100%", height: 40, fontSize: 20 }}
      onChange={(event) => {
        setValues(event.target.value);
      }}
    />
  );
};

export default TextInput;
