import { type NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import { Card, Pagination, Loading } from "../components"
import { env } from "../env.mjs"
import type { PlayersResponse } from "../types"
import { useFetch } from "../useFetch"

const API_KEY = env.NEXT_PUBLIC_API_KEY
const BASE_URL_HOST = "free-nba.p.rapidapi.com"
const BASE_URL = `https://${BASE_URL_HOST}/players?per_page=10&page=`
const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": BASE_URL_HOST,
  },
}

const Home: NextPage = () => {
  const [page, setPage] = useState(1)

  const { loading, value } = useFetch<PlayersResponse>(
    `${BASE_URL}${page}`,
    OPTIONS
  )

  const onPageChange = (page: number) => {
    setPage(page)
  }

  return (
    <>
      <Head>
        <title>17/27 - Custom Pagination</title>
      </Head>
      <main
        data-theme="luxury"
        className="flex min-h-screen flex-col gap-4 text-center"
      >
        <Loading loading={loading} />
        <h1 className="m-6 text-4xl font-extrabold tracking-tight">
          17/27 - Custom Pagination
        </h1>
        <div className="mb-10">
          <h1 className="mb-8 text-3xl font-extrabold tracking-tight">
            NBA Players List
          </h1>
          <div className="flex flex-col items-center justify-center gap-8">
            {value?.data?.map((player) => (
              <Card key={player.id} player={player} />
            ))}
          </div>
          {value?.meta && (
            <div className="m-8">
              <Pagination
                meta={value?.meta}
                page={page}
                onPageChange={onPageChange}
              />
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default Home
