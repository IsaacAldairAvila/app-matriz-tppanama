import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonInput = ({ question, setRespuestas, index, clean }) => {
  const [alignment, setAlignment] = React.useState(0);

  const handleAlignment = (even, newAlignment) => {
    setAlignment(newAlignment);
  };

  React.useEffect(() => {
    setRespuestas((res) =>
      res.map((item) =>
        item.id === question.id
          ? { ...item, id: question.id, value: alignment ? alignment : 0 }
          : item
      )
    );
  }, [alignment]);

  React.useEffect(() => {
    setAlignment(0)
  }, [clean]);
  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label={question.question}
        style={{ width: "100%" }}
        color="primary"
        className="question"
      >
        {question.options &&
          question.options.map((item, index) => (
            <ToggleButton
              value={item.value}
              aria-label={item.label}
              key={index}
              style={{ width: "50%" }}
            >
              {item.label}
            </ToggleButton>
          ))}
      </ToggleButtonGroup>
      {alignment > 0 && alignment < 4 ? (
        <div className="green"> Bajo </div>
      ) : alignment > 3 && alignment < 7 ? (
        <div className="yellow"> Medio </div>
      ) : alignment > 6 ? (
        <div className="red"> Alto </div>
      ) : (
        <></>
      )}{" "}
    </>
  );
};

export default ToggleButtonInput;
