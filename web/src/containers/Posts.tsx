import { ReactElement, useEffect, useState, useContext } from 'react'
import Card from '../components/Card'
import Cards from '../components/Cards'
import AddPost from '../containers/AddPost'
import checkAuthCredentials from '../hooks/checkAuthCredentials'
import { PostsContext } from '../contexts'
import Modal from '../components/Modal'

export default function Home(): ReactElement {
  const { posts, removePost } = useContext(PostsContext)
  useEffect(checkAuthCredentials, [])

  function removePostModal(status: boolean): void {
    status
    //
  }

  return (
    <div>
      <Cards id="posts">
        {posts.map((post, key) => (
          <Card
            id={post._id}
            key={key}
            user="jefer94"
            date="00/00/00"
            title={post.title}
            content={post.content}
            onRemove={removePost}
            image="/unnamed.jpg" />
        ) )}
      </Cards>
      <AddPost />
    </div>
  )
}