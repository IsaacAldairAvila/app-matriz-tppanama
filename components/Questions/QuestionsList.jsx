import React, { useEffect } from "react";
import Question, { QuestionTitle } from "./Question";

const QuestionsList = ({ data, setVisible, setPuntaje, clean }) => {
  const [cantidad, setCantidad] = React.useState(0);
  const [respuestas, setRespuestas] = React.useState([]);
  useEffect(() => {
    setCantidad(0);
    setRespuestas([]);
    data.map((question) => {
      if (
        question.type === "autocomplete" ||
        question.type === "toggleButton"
      ) {
        setCantidad((cant) => cant + 1);
      }
      return;
    });
    const array = [];
    data.forEach((question, index) => {
      if (
        question.type === "autocomplete" ||
        question.type === "toggleButton"
      ) {
        array.push({
          id: question.id,
          question: question.question,
          value: 0,
        });
      }
      return;
    });
    setRespuestas(array);
  }, []);
  useEffect(() => {
    if (cantidad === respuestas.filter((e) => e.value !== 0).length) {
      let suma = 0;
      let maximo = 9 * cantidad;
      let clon = [...respuestas];
      clon.forEach((it) => {
        suma = suma + it.value;
        return;
      });
      setPuntaje(Math.ceil(suma / (maximo / 9)));
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [cantidad, respuestas]);
  return (
    <>
      <div className="listcard">
        {data.map((item, index) => {
          if (item.type === "group") {
            return (
              <>
                <h2 style={{width:"100%", padding:10}}> {index + 1} - {item.question} </h2>
              {
                item.group &&
                item.group.map((subitem, subindex) => {
                  return (
                    <Question
                      key={subitem.id}
                      question={subitem}
                      index={`${index+1}.${subindex+1}`}
                      setRespuestas={setRespuestas}
                      respuestas={respuestas}
                      clean={clean}
                    />
                  );
                })
              }
              </>
            )
            
          }
          return (
            <Question
              key={item.id}
              question={item}
              index={`${index+1}`}
              setRespuestas={setRespuestas}
              respuestas={respuestas}
              clean={clean}
            />
          );
        })}
      </div>
    </>
  );
};

export const QuestionsListTitle = ({ data, clean }) => {
  return (
    <>
      <div className="listcard" styles={{ border: "1px solid red" }}>
        {data.map((item, index) => {
          return (
            <QuestionTitle
              key={index}
              question={item}
              index={index}
              clean={clean}
            />
          );
        })}
      </div>
    </>
  );
};

export default QuestionsList;
