import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const SelectInput = ({ question, clean }) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  React.useEffect(
    () => {
      setAge("");
    },
    [clean]
  );
  return (
    <>
      <Select
        required
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {
          question.options && question.options.map(
            (item, index) => <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
          )
        }
      </Select>
    </>
  )
}

export default SelectInput