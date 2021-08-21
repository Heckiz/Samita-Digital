import Head from 'next/head'
import Works from '../components/Works/Works'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Samita Digital</title>
        <meta name="Samita Digital" content="Digital designs and others articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Works/>
    </div>
  )
}
