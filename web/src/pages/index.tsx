import { ReactElement, useEffect, useContext } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Posts from '../containers/Posts'
import checkAuthCredentials from '../hooks/checkAuthCredentials'
import Contexts, { PostsContext } from '../contexts'

export default function Home(): ReactElement {
  const {} = useContext(PostsContext)
  useEffect(checkAuthCredentials)
  return (
    <div>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Contexts>
        <Posts />
      </Contexts>
    </div>
  )
}
