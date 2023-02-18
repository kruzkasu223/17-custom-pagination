import { type NextPage } from "next"
import Head from "next/head"
// import { env } from "../env.mjs"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>17/27 - Custom Pagination</title>
      </Head>
      <main
        data-theme="synthwave"
        className="flex min-h-screen flex-col gap-4 text-center"
      >
        <h1 className="m-6 text-4xl font-extrabold tracking-tight">
          17/27 - Custom Pagination
        </h1>
      </main>
    </>
  )
}

export default Home
