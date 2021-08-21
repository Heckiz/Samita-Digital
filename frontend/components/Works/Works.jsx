import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import React from 'react'
import { fetchWorks, useWorks } from '../../hooks/useWorks'
import WorkCard from './WorkCard/WorkCard'
import { Flex, Grid } from '@chakra-ui/react'

export default function Works() {
  const { data, isLoading, isError } = useWorks();

  return (
    <>
      {
        isError ? <h1>Error</h1> :
          isLoading ? <h1>Loading</h1> :

            <Flex  border="2px solid black" justifyContent="center" alignItems="center">
              <Grid>
                {
                  data.map(work => (
                    <WorkCard />
                  ))
                }
              </Grid>
            </Flex>


      }
    </>
  )
}

export async function getServerSideProps({ }) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('works', fetchWorks)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}