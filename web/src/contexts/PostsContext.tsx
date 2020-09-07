import React, { useEffect, useState, createContext, ReactElement, ReactNode } from 'react'
import axios from 'axios'
import construcHeaders from '../hooks/construcHeaders'

type PostsContextAtrrs = {
  readonly posts: readonly Post[]
  readonly fetch?: () => void
  readonly addPost?: (post: Post) => void
  readonly removePost?: (id: string) => void
}

export const PostsContext = createContext<PostsContextAtrrs>({
  posts: []
})

type Post = {
  readonly _id?: string
  readonly title: string
  readonly content: string
  readonly image: string
  readonly createdAt: string
  readonly updatedAt: string
}

type PostsContextProviderProps = {
  readonly children: ReactNode
}

/**
 * Posts context provider.
 *
 * @param Props - Props.
 * @returns Posts context provider.
 */
export function PostsContextProvider({ children }: PostsContextProviderProps): ReactElement {
  const [posts, setPosts] = useState<readonly Post[]>([])
  const [offset, setOffset] = useState(0)

  useEffect(fetch, [])

  function fetch(): void {
    axios.get(`http://localhost:9000/posts/${offset}`, { headers: construcHeaders() }).then((response) => {
      if (response.data.data) setPosts(response.data.data)
    }).catch((e) => { console.error(e) })
    setOffset(offset + 1)
  }

  function addPost(post: Post): void {
    setPosts([post, ...posts])
  }

  function removePost(id: string): void {
    axios.delete(`http://localhost:9000/posts/${id}`, { headers: construcHeaders() })
      .then()
      .catch((e) => { console.error(e) })
    setPosts(posts.filter(({ _id }) => _id !== id))
  }

  return (
    <PostsContext.Provider value={{ posts, fetch, addPost, removePost }}>
      {children}
    </PostsContext.Provider>
  )
}

export const PostsContextConsumer = PostsContext.Consumer
