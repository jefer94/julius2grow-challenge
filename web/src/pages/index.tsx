import { ReactElement, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Posts from '../containers/Posts'
import checkAuthCredentials from '../hooks/checkAuthCredentials'

export default function Home(): ReactElement {
  useEffect(checkAuthCredentials)
  return (
    <div>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Posts />
    </div>
  )
}
