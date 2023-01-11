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
      question: "Nombre del Cliente",
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
      question: "Fecha de Nacimiento",
      type: "date",
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
      question: "Ocupación",
      type: "autocomplete",
      id: "a6",
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
      question: "Servicios",
      type: "autocomplete",
      id: "a7",
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
      question: "Canal de Distribución",
      type: "autocomplete",
      id: "a8",
      options: [
        {
          label: "Directo",
          value: 4,
        },
        {
          label: "Intermediario",
          value: 5,
        },
      ],
    },
    {
      question: "Método de Pago",
      type: "autocomplete",
      id: "a9",
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
      question: "Ventas Anuales",
      type: "autocomplete",
      id: "a10",
      options: [
        {
          label: "Menos de 100000$",
          value: 1,
        },
        {
          label: "Entre 100000$ y 150000$",
          value: 4,
        },
        {
          label: "Mas de 150000$",
          value: 7,
        },
      ],
    },
    {
      question: "Cliente con noticias negativas",
      type: "toggleButton",
      id: "a11",
      options: [
        {
          label: "Si",
          value: 5,
        },
        {
          label: "No",
          value: 6,
        },
      ],
    },
    {
      question: "Cliente en Listas Restrictivas",
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
      question:
        "¿Recibe dinero en efectivo en cuantías igual o mayor a 10,000.00?",
      type: "toggleButton",
      id: "a13",
      options: [
        {
          label: "Si",
          value: 1,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
    {
      question: "País origen de fondos",
      type: "autocomplete",
      id: "a14",
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
  ];
  const datajuridica = [
    {
      question: "Cliente",
      type: "autocomplete",
      id: "b1",
      options: [
        {
          label: "Personas Naturales",
          value: 1,
        },
        {
          label: "Personas Jurídicas",
          value: 3,
        },
      ],
    },
    {
      question: "Razón Social",
      type: "text",
      id: "b2",
    },
    {
      question: "Razón Comercial",
      type: "text",
      id: "b3",
    },
    {
      question: "Tipo de Identificación",
      type: "select",
      id: "b4",
      options: [
        {
          label: "Cedula",
          value: 4,
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
      id: "b5",
    },
    {
      question: "Fecha de constitución",
      type: "date",
      id: "b6",
    },
    {
      question: "Tipo de Sociedad",
      type: "autocomplete",
      id: "b7",
      options: [
        {
          label: "Fideicomisos",
          value: 4,
        },
        {
          label: "Fondos",
          value: 2,
        },
        {
          label: "Fundación de interes privado",
          value: 1,
        },
      ],
    },
    {
      question: "País de constitución de la sociedad",
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
      question: "Actividad Económica",
      type: "autocomplete",
      id: "b9",
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
      question: "Empresa Pública",
      type: "toggleButton",
      id: "b10",
      options: [
        {
          label: "Si",
          value: 1,
        },
        {
          label: "No",
          value: 3,
        },
      ],
    },
    {
      question: "Representante Legal",
      type: "text",
      id: "b11",
    },
    {
      question: "Ocupación",
      type: "autocomplete",
      id: "b12",
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
      question: "Servicios",
      type: "autocomplete",
      id: "b13",
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
      question: "Canal de Distribución o Canal de Comercialización",
      type: "autocomplete",
      id: "b14",
      options: [
        {
          label: "Directo",
          value: 3,
        },
        {
          label: "Intermediario",
          value: 5,
        },
      ],
    },
    {
      question: "Método de Pago",
      type: "autocomplete",
      id: "b15",
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
      question: "Ventas Anuales",
      type: "autocomplete",
      id: "b16",
      options: [
        {
          label: "Menos de 100000$",
          value: 1,
        },
        {
          label: "Entre 100000$ y 150000$",
          value: 4,
        },
        {
          label: "Mas de 150000$",
          value: 9,
        },
      ],
    },
    {
      question: "Cliente con noticias negativas",
      type: "toggleButton",
      id: "b17",
      options: [
        {
          label: "Si",
          value: 1,
        },
        {
          label: "No",
          value: 3,
        },
      ],
    },
    {
      question: "Cliente en Listas Restrictivas",
      type: "toggleButton",
      id: "b18",
      options: [
        {
          label: "Si",
          value: 1,
        },
        {
          label: "No",
          value: 9,
        },
      ],
    },
    {
      question:
        "¿Recibe dinero en efectivo en cuantías igual o mayor a 10,000.00?",
      type: "toggleButton",
      id: "b19",
      options: [
        {
          label: "Si",
          value: 4,
        },
        {
          label: "No",
          value: 5,
        },
      ],
    },
    {
      question: "País origen de fondos",
      type: "autocomplete",
      id: "b20",
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
      question: 'Director 1',
      type: 'group',
      id: 'gba',
      group: [
        {
          question: "Nombre",
          type: "text",
          id: "gb1",
        },
        {
          question: "PET",
          type: "toggleButton",
          id: "gb2",
          options: [
            {
              label: "Si",
              value: 1000,
            },
            {
              label: "No",
              value: 9,
            },
          ],
        },
        {
          question: "Nacionalidad",
          type: "autocomplete",
          id: "gb3",
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
      ]
    },
    {
      question: 'Director 2',
      type: 'group',
      id: 'gbb',
      group: [
        {
          question: "Nombre",
          type: "text",
          id: "gb4",
        },
        {
          question: "PET",
          type: "toggleButton",
          id: "gb5",
          options: [
            {
              label: "Si",
              value: 1000,
            },
            {
              label: "No",
              value: 9,
            },
          ],
        },
        {
          question: "Nacionalidad",
          type: "autocomplete",
          id: "gb6",
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
      ]
    },
    {
      question: 'Director 3',
      type: 'group',
      id: 'gbc',
      group: [
        {
          question: "Nombre",
          type: "text",
          id: "gbc1",
        },
        {
          question: "PET",
          type: "toggleButton",
          id: "gbc2",
          options: [
            {
              label: "Si",
              value: 1000,
            },
            {
              label: "No",
              value: 9,
            },
          ],
        },
        {
          question: "Nacionalidad",
          type: "autocomplete",
          id: "gbc3",
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
      ]
    },
    {
      question: 'Beneficiario 1',
      type: 'group',
      id: 'gbd',
      group: [
        {
          question: "Nombre",
          type: "text",
          id: "gbd1",
        },
        {
          question: "PET",
          type: "toggleButton",
          id: "gbd2",
          options: [
            {
              label: "Si",
              value: 1000,
            },
            {
              label: "No",
              value: 9,
            },
          ],
        },
        {
          question: "Nacionalidad",
          type: "autocomplete",
          id: "gbd3",
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
      ]
    },
    {
      question: 'Beneficiario 2',
      type: 'group',
      id: 'gbe',
      group: [
        {
          question: "Nombre",
          type: "text",
          id: "gbe1",
        },
        {
          question: "PET",
          type: "toggleButton",
          id: "gbe2",
          options: [
            {
              label: "Si",
              value: 1000,
            },
            {
              label: "No",
              value: 9,
            },
          ],
        },
        {
          question: "Nacionalidad",
          type: "autocomplete",
          id: "gbe3",
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
      ]
    },
    {
      question: 'Beneficiario 3',
      type: 'group',
      id: 'gbf',
      group: [
        {
          question: "Nombre",
          type: "text",
          id: "gbf1",
        },
        {
          question: "PET",
          type: "toggleButton",
          id: "gbf2",
          options: [
            {
              label: "Si",
              value: 1000,
            },
            {
              label: "No",
              value: 9,
            },
          ],
        },
        {
          question: "Nacionalidad",
          type: "autocomplete",
          id: "gbf3",
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
      ]
    },
    {
      question: 'Beneficiario 4',
      type: 'group',
      id: 'gbf',
      group: [
        {
          question: "Nombre",
          type: "text",
          id: "gbf1",
        },
        {
          question: "PET",
          type: "toggleButton",
          id: "gbf2",
          options: [
            {
              label: "Si",
              value: 1000,
            },
            {
              label: "No",
              value: 9,
            },
          ],
        },
        {
          question: "Nacionalidad",
          type: "autocomplete",
          id: "gbf3",
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
      ]
    }
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
            <Tab label="Jurídica" {...a11yProps(1)} />
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
                  {"Matriz de riesgo de Clientes"}
                  {value === 0 ? ": Natural" : ": Jurídica"}
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
              setClean(!clean)
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
