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
  const datanatural = [
    {
      question: "Nombre comercial",
      type: "text",
      id: "a1",
    },
    {
      question: "Nombre personal",
      type: "text",
      id: "a2",
    },
    {
      question: "Tipo de Identificación",
      type: "select",
      id: "a3",
      options: [
        {
          label: "Cedula",
          value: 3,
        },
        {
          label: "Pasaporte",
          value: 5,
        },
        {
          label: "RUC",
          value: 5,
        },
      ],
    },
    {
      question: "Número de identificación",
      type: "text",
      id: "a4",
    },
    {
      question: "Nacionalidad",
      type: "autocomplete",
      id: "a5",
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
      question: "País de residencia",
      type: "autocomplete",
      id: "a6",
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
      question: "PEP",
      type: "toggleButton",
      id: "a7",
      options: [
        {
          label: "Si",
          value: 1000,
        },
        {
          label: "No",
          value: 6,
        },
      ],
    },
    {
      question: "Tipo de servicio",
      type: "text",
      id: "a7",
    },
    {
      question: "Forma de Pago",
      type: "autocomplete",
      id: "a8",
      options: [
        {
          label: "Contrato",
          value: 5,
        },
        {
          label: "Credito",
          value: 5,
        },
      ],
    },
    {
      question: "País origen de fondos",
      type: "autocomplete",
      id: "a9",
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
      question: "Forma de contratación",
      type: "autocomplete",
      id: "a10",
      options: [
        {
          label: "Servicio Recurrente",
          value: 5,
        },
        {
          label: "Contrato",
          value: 5,
        },
        {
          label: "Servicio No Recurrente",
          value: 5,
        },
      ],
    },
    {
      question: "Método de Pago",
      type: "autocomplete",
      id: "a11",
      options: [
        {
          label: "Efectivo",
          value: 5,
        },
        {
          label: "Cheques",
          value: 5,
        },
        {
          label: "Transferencia bancaria",
          value: 5,
        },
        {
          label: "Tarjeta de credito o debito",
          value: 5,
        },
      ],
    },
    {
      question: "Información de noticias negativas",
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
  ];
  const datajuridica = [
    {
      question: "Nombre Legal",
      type: "text",
      id: "b1",
    },
    {
      question: "Nombre Comercial",
      type: "text",
      id: "b2",
    },
    {
      question: "Tipo de Identificación",
      type: "select",
      id: "b3",
      options: [
        {
          label: "Cedula",
          value: 3,
        },
        {
          label: "Pasaporte",
          value: 5,
        },
        {
          label: "RUC",
          value: 5,
        },
      ],
    },
    {
      question: "Número de identificación",
      type: "text",
      id: "b4",
    },
    {
      question: "País de Constitución",
      type: "autocomplete",
      id: "b5",
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
      question: "Representante legal",
      type: "text",
      id: "b6",
    },
    {
      question: "Cédula o Pasaporte",
      type: "text",
      id: "b7",
    },
    {
      question: "País de residencia",
      type: "autocomplete",
      id: "b8",
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
      question: "PEP",
      type: "toggleButton",
      id: "b9",
      options: [
        {
          label: "Si",
          value: 1000,
        },
        {
          label: "No",
          value: 6,
        },
      ],
    },
    {
      question: "Tipo de servicio",
      type: "text",
      id: "b10",
    },
    {
      question: "Forma de Pago",
      type: "autocomplete",
      id: "b11",
      options: [
        {
          label: "Contrato",
          value: 5,
        },
        {
          label: "Credito",
          value: 5,
        },
      ],
    },
    {
      question: "País origen de fondos",
      type: "autocomplete",
      id: "b12",
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
      question: "Forma de contratación",
      type: "autocomplete",
      id: "b13",
      options: [
        {
          label: "Servicio Recurrente",
          value: 5,
        },
        {
          label: "Contrato",
          value: 5,
        },
        {
          label: "Servicio No Recurrente",
          value: 5,
        },
      ],
    },
    {
      question: "Método de Pago",
      type: "autocomplete",
      id: "b14",
      options: [
        {
          label: "Efectivo",
          value: 5,
        },
        {
          label: "Cheques",
          value: 5,
        },
        {
          label: "Transferencia bancaria",
          value: 5,
        },
        {
          label: "Tarjeta de credito o debito",
          value: 5,
        },
      ],
    },
    {
      question: "Información de noticias negativas",
      type: "toggleButton",
      id: "b15",
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
            <Tab label="Natural" {...a11yProps(0)} />
            <Tab label="Jurídico" {...a11yProps(1)} />
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
                <h1>
                  {"Matriz de riesgo de Proveedor"}
                  {value === 0 ? ": Natural" : ": Jurídico"}
                </h1>
              </div>
            </div>
            <div className="subtitleB">Información general </div>
            <QuestionsListTitle data={info} clean={clean} />
            {/* <QuestionsList  title={true} setVisible={setVisible} setPuntaje={setPuntaje}/> */}
            <div className="subtitleB"> Formulario - riesgo Inherente </div>
            {value === 0 ? (
              <QuestionsList
                data={datanatural}
                setVisible={setVisible}
                setPuntaje={setPuntaje}
                key="a1"
                clean={clean}
              />
            ) : (
              <QuestionsList
                data={datajuridica}
                setVisible={setVisible}
                setPuntaje={setPuntaje}
                key="a2"
                clean={clean}
              />
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
