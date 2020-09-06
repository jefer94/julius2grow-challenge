import { ReactElement, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Cards from '../components/Cards'
import Post from '../containers/Post'
import checkAuthCredentials from '../hooks/checkAuthCredentials'

export default function Home(): ReactElement {
  useEffect(checkAuthCredentials)
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
