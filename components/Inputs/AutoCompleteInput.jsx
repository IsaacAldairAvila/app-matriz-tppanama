import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutoCompleteInput = ({ question, setRespuestas, index, clean }) => {
  const { options } = question;
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState();
  React.useEffect(() => {
    setRespuestas((res) =>
      res.map((item) =>
        item.id === question.id
          ? { ...item, id: question.id, value: value ? value.value : 0 }
          : item
      )
    );
  }, [value]);

  React.useEffect(() => {
    setValue('');
    setInputValue('');
  }, [clean]);

  return (
    <>
      <Autocomplete
        key={clean}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
         inputValue={inputValue}
         onInputChange={(event, newInputValue) => {
           setInputValue(newInputValue);
         }}
        id="combo-box-demo"
        options={options ? options : []}
        style={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} required={true} />}
      />
      {value && value.value > 0 && value.value < 4 ? (
        <div className="green"> Bajo </div>
      ) : value && value.value > 3 && value.value < 7 ? (
        <div className="yellow"> Medio </div>
      ) : value && value.value > 6 && value.value < 10 ? (
        <div className="red"> Alto </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AutoCompleteInput;

// respuestas.map((item) =>
//     //       item.id === index ? { ...item, value: value.value } : item
