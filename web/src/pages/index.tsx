import { ReactElement } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Cards from '../components/Cards'
import Post from '../containers/Post'

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Cards>
        <Card image="/unnamed.jpg" />
        <Card image="/unnamed.jpg" />
        <Card image="/unnamed.jpg" />
      </Cards>
      <Post />
    </div>
  )
}
