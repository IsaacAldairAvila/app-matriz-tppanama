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
          <h1 style={{color: 'black'}}>  En desarrollo...</h1>
        </Container>
      </Main>
    </>
  );
};

export default Index;
