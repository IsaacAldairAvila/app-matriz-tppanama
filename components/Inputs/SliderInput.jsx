import React from 'react'
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return `${value}°C`;
  }

const SliderInput = ({question}) => {
    const { options }  = question
  return (
    <div>
        <Slider
        aria-label="Custom marks"
        defaultValue={0}
        step={null}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        size='small'
        max={200000}
      />
    </div>
  )
}

export default SliderInput