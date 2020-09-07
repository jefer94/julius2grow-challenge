import { ReactElement, useEffect, useState, useContext } from 'react'
import Card from '../components/Card'
import Cards from '../components/Cards'
import AddPost from '../containers/AddPost'
import checkAuthCredentials from '../hooks/checkAuthCredentials'
import { PostsContext } from '../contexts'
import Modal from '../components/Modal'
import FilterPosts from './FilterPosts'
import css from './Posts.module.css'

export default function Home(): ReactElement {
  const { posts, removePost } = useContext(PostsContext)
  useEffect(checkAuthCredentials, [])

  // function removePostModal(status: boolean): void {
  //   status
  //   //
  // }

  return (
    <div className={css.container}>
      <Cards id="posts">
        {posts.map((post, key) => (
          <Card
            id={post._id}
            key={key}
            user={post.user.username}
            date={post.createdAt}
            title={post.title}
            content={post.content}
            onRemove={removePost}
            image={`http://localhost:9000${post.image}`} />
        ) )}
      </Cards>
      <div className={css.sidebar}>
        <FilterPosts />
        <AddPost />
      </div>
    </div>
  )
}
