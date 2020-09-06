import { ReactElement, useEffect, useState } from 'react'
import Card from '../components/Card'
import Cards from '../components/Cards'
import AddPost from '../containers/AddPost'
import checkAuthCredentials from '../hooks/checkAuthCredentials'
import axios from 'axios'
import construcHeaders from '../hooks/construcHeaders'

export default function Home(): ReactElement {
  const [posts, setPosts] = useState([])
  useEffect(checkAuthCredentials, [])
  useEffect(() => {
    axios.get('http://localhost:9000/posts', { headers: construcHeaders() }).then((response) => {
      if (response.data.data) {
        setPosts(response.data.data)
      }
    }).catch((e) => {
      console.error(e)
    })
  }, [])
  return (
    <div>
      <Cards id="posts">
        {posts.map((_, key) => <Card key={key} image="/unnamed.jpg" />)}
        {/* <Card image="/unnamed.jpg" />
        <Card image="/unnamed.jpg" />
        <Card image="/unnamed.jpg" /> */}
      </Cards>
      <AddPost />
    </div>
  )
}
