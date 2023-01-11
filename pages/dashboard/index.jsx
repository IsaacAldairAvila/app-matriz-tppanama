import React from "react";
import Head from "next/head";
import { Main } from "../../styled-components/Main";
import QuestionsList from "../../components/Questions/QuestionsList";
import { useAuth } from "../../contexts/AuthContex";
import { useRouter } from "next/router";
import Sidebar from '../../components/Sidebar'
import Container from '../../components/Container'
import ListCard from '../../components/Card/ListCard.jsx'
import * as CiIcons from "react-icons/ci";
const Index = () => {
  const Links = [
    {
      title: "Clientes",
      color: "#FFC476",
      pathname: "/dashboard/clientes",
      icon: <CiIcons.CiReceipt size={50} />,
    },
    {
      title: "Colaboradores",
      color: "#FE9B66",
      pathname: "/dashboard/colaboradores",
      icon: <CiIcons.CiUser size={50} />
    },
    {
      title: "Proveedores",
      color: "#FF7C61",
      pathname: "/dashboard/proveedores",
      icon: <CiIcons.CiViewTimeline size={50} />
    },
    {
      title: "Autoevaluación",
      color: "#FA5D5D",
      pathname: "/dashboard/autoevaluacion",
      icon: <CiIcons.CiViewTable size={50} />
    },
    // {
    //   title: "Auditoría",
    //   color: "#FF3976",
    //   pathname: "/dashboard/auditoria",
    //   icon: <CiIcons.CiSettings size={50} />,
    // },
    {
      title: "Configuración",
      color: "#1d1d1d",
      pathname: "/dashboard/configuracion",
      icon: <CiIcons.CiSettings size={50} />,
    },
  ];
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
          <ListCard list={Links} />
        </Container>
      </Main>
    </>
  );
};

export default Index;
