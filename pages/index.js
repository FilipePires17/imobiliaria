import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default function App () {
  return (
    <>
      <Head>
        <title>Gilson</title>
      </Head>
      <Header />
      <main>
        <div id='sobre'></div>
      </main>
      <Footer />
    </>
  )
}
