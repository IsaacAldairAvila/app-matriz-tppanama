import React from "react";
import ApexChart from "../../charts/ApexChart";
import styles from "../../styles/Matriz.module.css";
import { useElementSize } from "usehooks-ts";

const Matriz = ({ puntaje , visible }) => {
  const [squareRef, { width, height }] = useElementSize();
  if (visible) {
    return (
      <>
        <div className={styles.container}>
          <div
            ref={squareRef}
            style={{
              width: "100%",
              padding: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ApexChart height={400} width={600} puntaje={puntaje} />
          </div>
          <div className={styles.result}>
            <div className={styles.resulttitle}>RESULTADO</div>
            <div className={styles.inforesult} style={puntaje > 0 && puntaje < 4 ? {backgroundColor : '#00A100'} : (
                  puntaje > 3 && puntaje < 7 ? {backgroundColor : '#FFB200'} : {backgroundColor : '#FF0000'}
                )}>
              {
                puntaje > 0 && puntaje < 4 ? 'BAJO RIESGO' : (
                  puntaje > 3 && puntaje < 7 ? 'MEDIO RIESGO' : 'ALTO RIESGO'
                )
              }
              </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default Matriz;
