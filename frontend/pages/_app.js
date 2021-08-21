import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
 import { Hydrate } from 'react-query/hydration'
 import React from 'react'
 import {ChakraProvider} from '@chakra-ui/react'
 
 export default function MyApp({ Component, pageProps }) {
   const [queryClient] = React.useState(() => new QueryClient())
 
   return (
     <ChakraProvider>
     <QueryClientProvider client={queryClient}>
       <Hydrate state={pageProps.dehydratedState}>
         <Component {...pageProps} />
       </Hydrate>
     </QueryClientProvider>
     </ChakraProvider>
   )
 }

