import { ClassNames } from "@emotion/react";
import React from "react";
import Card from "../../styled-components/Card";
import AutoCompleteInput from "../Inputs/AutoCompleteInput";
import DateInput from "../Inputs/DateInput";
import SelectInput from "../Inputs/SelectInput";
import SliderInput from "../Inputs/SliderInput";
import TextInput from "../Inputs/TextInput";
import ToggleButtonInput from "../Inputs/ToggleButtonInput";
import CheckboxInput from "../Inputs/CheckboxText";

const Question = ({ question, index, setRespuestas, respuestas, clean }) => {
  const option = {
    select: <SelectInput question={question} clean={clean} key={index}/>,
    text: <TextInput clean={clean} key={index}/>,
    date: <DateInput clean={clean} key={index}/>,
    autocomplete: (
      <AutoCompleteInput
        question={question}
        setRespuestas={setRespuestas}
        index={index}
        clean={clean}
        key={index}
      />
    ),
    toggleButton: (
      <ToggleButtonInput
        question={question}
        setRespuestas={setRespuestas}
        index={index}
        clean={clean} key={index}
      />
    )
  };

  return (
    <div className="card" style={{ width: "100%" }}>
      <div style={{ width: "50%", marginRight: "10px" }}>
        {`${index} - ${question.question}`}
      </div>
      <div style={{ width: "50%",   alignSelf: 'stretch' }} className="questionitem">
        {option[question.type]}
      </div>
    </div>
  );
};

export const QuestionTitle = ({ question, index, clean }) => {
  const option = {
    select: <SelectInput question={question} clean={clean} key={index}/>,
    text: <TextInput clean={clean} key={index}/>,
    date: <DateInput clean={clean} key={index}/>,
  };

  return (
    <div className="card" style={{ width: "100%" }}>
      <div style={{ width: "50%", marginRight: "10px" }}>
        {`${question.question}`}
      </div>
      <div style={{ width: "50%" }} className="questionitem">
        {option[question.type]}
      </div>
    </div>
  );
};



export default Question;
