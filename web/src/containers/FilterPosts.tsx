import { Button, Form } from 'reactstrap'

import { ReactElement, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Error from '../components/Error'
import Success from '../components/Success'
// import Head from 'next/head'
import authCss from './Auth.module.css'
import css from './AddPost.module.css'
import construcHeaders from '../hooks/construcHeaders'
import Field from '../components/Field'
import logout from '../hooks/logout'
import { PostsContext } from '../contexts'
// import Navbar from '../components/Navbar'

export default function FilterPosts(): ReactElement {
  const { addPost, filterPost } = useContext(PostsContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function submit() {
    setError('')
    if (title || content) {
      filterPost({ title, content })
    }
    else setError('No estas haciendo una busqueda por titulo o contenido')
  }
  useEffect(() => {
    if (success) setTimeout(() => setSuccess(''), 2000)
  }, [success])

  return (
    <div className={css.container}>
      <h1 className={authCss.title}>Filtrar Posts</h1>
      <Form>
          <Field
            id="filter-title"
            label="Title"
            value={title}
            type="text"
            placeholder="Mi increible texto"
            onChange={(v) => setTitle(v.target.value)}
          />
          <Field
            id="filter-content"
            label="Content"
            value={content}
            type="textarea"
            placeholder="Contenido del increible post"
            onChange={(v) => setContent(v.target.value)}
          />

          <Error error={error} />
          <Success message={success} />

          <Button className={authCss.submit} onClick={submit} block>Buscar</Button>
        </Form>
    </div>
  )
}
