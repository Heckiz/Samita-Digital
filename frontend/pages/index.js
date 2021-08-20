import Head from 'next/head'
import WorksList from '../components/Works/WorksList'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Samita Digital</title>
        <meta name="Samita Digital" content="Digital designs and others articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WorksList/>
    </div>
  )
}
