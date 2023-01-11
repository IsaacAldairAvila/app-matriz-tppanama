import Head from 'next/head'
import { Main } from '../styled-components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="description" content={process.env.APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div > HOME </div>
      </Main>
    </>
  )
}