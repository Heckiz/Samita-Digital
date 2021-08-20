import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import React from 'react'
import { fetchWorks, useWorks } from '../../hooks/useWorks'

export default function DesignsList() {
  const {data} = useWorks();
  console.log(data)
  return (
    <>
      <h1>Work List</h1>
    </>
  )
}

export async function getServerSideProps({ }) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('works', fetchWorks)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      props: locale
    },
  }
}