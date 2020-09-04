import { ReactElement } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Card image="/unnamed.jpg" />
      asdasd       
    </div>
  )
}
