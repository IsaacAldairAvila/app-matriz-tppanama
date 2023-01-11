import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Head from "next/head";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Image from "next/image";
import { Main } from "../../styled-components/Main";
import Matriz from "../../components/Matriz/Matriz";
import Router from "next/router";
import QuestionsList, {
  QuestionsListTitle,
} from "../../components/Questions/QuestionsList";
import { useAuth } from "../../contexts/AuthContex";
import Sidebar from "../../components/Sidebar";
import Container from "../../components/Container";
import Link from "next/link";
const Index = () => {
  const [value, setValue] = React.useState(0);
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const datacolaborador = [
    {
      question: "Nombre Completo",
      type: "text",
      id: "a1",
    },
    {
      question: "Tipo de Identificación",
      type: "select",
      id: "a2",
      options: [
        {
          label: "Cedula",
          value: 3,
        },
        {
          label: "Pasaporte",
          value: 5,
        },
      ],
    },
    {
      question: "Número de identificación",
      type: "text",
      id: "a3",
    },
    {
      question: "Nacionalidad",
      type: "autocomplete",
      id: "a4",
      options: [
        {
          label: "Afghanistan",
          value: 5,
        },
        {
          label: "Albania",
          value: 5,
        },
        {
          label: "Algeria",
          value: 5,
        },
        {
          label: "Angola",
          value: 5,
        },
        {
          label: "Argentina",
          value: 5,
        },
        {
          label: "Armenia",
          value: 5,
        },
        {
          label: "Australia",
          value: 5,
        },
        {
          label: "Austria",
          value: 5,
        },
        {
          label: "Azerbaijan",
          value: 5,
        },
        {
          label: "Bahamas",
          value: 5,
        },
        {
          label: "Bahrain",
          value: 5,
        },
        {
          label: "Bangladesh",
          value: 5,
        },
        {
          label: "Barbados",
          value: 5,
        },
        {
          label: "Belarus",
          value: 5,
        },
        {
          label: "Belgium",
          value: 5,
        },
        {
          label: "Belize",
          value: 5,
        },
        {
          label: "Benin",
          value: 5,
        },
      ],
    },
    {
      question: "Profesión",
      type: "autocomplete",
      id: "a5",
      options: [
        {
          label: "Abogados / Agentes Residentes",
          value: 5,
        },
        {
          label: "Agencias de Viajes",
          value: 5,
        },
        {
          label: "Agente Inmobiliario",
          value: 5,
        },
        {
          label: "Asesores de Inversión",
          value: 5,
        },
        {
          label: "Bienes Raíces",
          value: 5,
        },
        {
          label: "Casas de Bolsa",
          value: 5,
        },
        {
          label: "Casas de Empeños",
          value: 5,
        },
        {
          label: "Casas de Valores",
          value: 5,
        },
      ],
    },
    {
      question: "PEP",
      type: "toggleButton",
      id: "a6",
      options: [
        {
          label: "Si",
          value: 3,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
    {
      question: "PEP relacionado",
      type: "toggleButton",
      id: "a7",
      options: [
        {
          label: "Si",
          value: 3,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
    {
      question: "Referencias Laborales Verificadas",
      type: "toggleButton",
      id: "a8",
      options: [
        {
          label: "Si",
          value: 3,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
    {
      question: "Record Policivo",
      type: "autocomplete",
      id: "a9",
      options: [
        {
          label: "NO",
          value: 5,
        },
        {
          label: "SI",
          value: 5,
        },
        {
          label: "N/A",
          value: 5,
        },
      ],
    },
    {
      question: "Posición Jerárquica",
      type: "autocomplete",
      id: "a10",
      options: [
        {
          label: "Superior",
          value: 5,
        },
        {
          label: "Intermedio",
          value: 5,
        },
        {
          label: "Operaciones",
          value: 5,
        },
      ],
    },
    {
      question: "Área de Posición",
      type: "autocomplete",
      id: "a11",
      options: [
        {
          label: "Administración",
          value: 5,
        },
        {
          label: "Cumplimiento",
          value: 5,
        },
        {
          label: "Finanzas",
          value: 5,
        },
      ],
    },
    {
      question: "Verificación en OFAC",
      type: "toggleButton",
      id: "a12",
      options: [
        {
          label: "Si",
          value: 3,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
    {
      question: "Verificación en World Check",
      type: "toggleButton",
      id: "a13",
      options: [
        {
          label: "Si",
          value: 3,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
    {
      question: "Verificación en Panadata",
      type: "toggleButton",
      id: "a14",
      options: [
        {
          label: "Si",
          value: 3,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
    {
      question: "Cliente con noticias negativas",
      type: "toggleButton",
      id: "a15",
      options: [
        {
          label: "Si",
          value: 3,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
  ];
  const info = [
    {
      question: "Fecha",
      type: "date",
    },
    {
      question: "Persona de Enlace",
      type: "text",
    },
    {
      question: "Status del cliente",
      type: "select",
      options: [
        {
          label: "Activo",
          value: 4,
        },
        {
          label: "Inactivo",
          value: 5,
        },
      ],
    },
  ];
  const componentRef = useRef();
  const [visible, setVisible] = useState(false);
  const [puntaje, setPuntaje] = useState(false);
  const [clean, setClean] = useState(false);
  useEffect(() => {
    setVisible(false);
    setPuntaje(0);
  }, [value]);

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="description" content={process.env.APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Sidebar />
        <Container>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs"
            textColor="inherit"
          >
            <Tab label="Colaborador" {...a11yProps(0)} />
          </Tabs>
          <div className="pdf" ref={componentRef}>
            <div className="img">
              <Image
                src="/logo.jpg"
                height={100}
                width={245}
                quality={100}
                alt="logo"
                priority
              />
            </div>
            <div className="title">
              <div className="titleinfo">
                <h1>{"Matriz de riesgo de Colaborador"}</h1>
              </div>
            </div>
            <div className="subtitleB">Información general </div>
            <QuestionsListTitle data={info} clean={clean} />
            {/* <QuestionsList  title={true} setVisible={setVisible} setPuntaje={setPuntaje}/> */}
            <div className="subtitleB"> Formulario - riesgo Inherente </div>
            {value === 0 ? (
              <QuestionsList
                data={datacolaborador}
                setVisible={setVisible}
                setPuntaje={setPuntaje}
                key="a1"
                clean={clean}
              />
            ) : (
              <></>
            )}
            {visible ? (
              <div className="subtitle"> Resultados - riesgo Inherente </div>
            ) : (
              <></>
            )}
            <Matriz visible={visible} puntaje={puntaje} />
          </div>
          <button
            className="button"
            onClick={() => {
              setClean(!clean);
              // setTimeout(() => {
              //   setClean(false)
              // }, 1)
            }}
          >
            Limpiar
          </button>
          {visible ? (
            <ReactToPrint
              trigger={() => <button className="button">Imprimir!</button>}
              content={() => componentRef.current}
              bodyClass="reactpdf"
              documentTitle="Matriz de Riesgo TPPanama"
            />
          ) : (
            <></>
          )}
        </Container>
      </Main>
    </>
  );
};

export default Index;
