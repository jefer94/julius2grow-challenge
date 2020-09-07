import { Button, Form } from 'reactstrap'

import { ReactElement, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Error from '../components/Error'
import Success from '../components/Success'
// import Head from 'next/head'
import authCss from './Auth.module.css'
import postCss from './AddPost.module.css'
import construcHeaders from '../hooks/construcHeaders'
import Field from '../components/Field'
import logout from '../hooks/logout'
import { PostsContext } from '../contexts'
// import Navbar from '../components/Navbar'

export default function AddPost(): ReactElement {
  const { addPost } = useContext(PostsContext)
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function submit() {
    const image = '/'
    setError('')
    if (title && content && image) {
      try {
        const response = await axios.post('http://localhost:9000/posts', { title, content, image },
          { headers: construcHeaders() })
        
        if (!response.data.data) {
          setError('Error desconocido')
          return
        }
  
        setTitle('')
        setContent('')
        setImage('')
        if (addPost) addPost(response.data.data)
        setSuccess('Post agregado')
      }
      catch(e) {
        console.error(e)
        logout()
      }
    }
    else if (!title) setError('Titulo vacio')
    else if (!content) setError('Contenido vacio')
    else setError('Contenido vacio')
  }
  useEffect(() => {
    if (success) setTimeout(() => setSuccess(''), 2000)
  }, [success])

  return (
    <div className={postCss.container}>
      <h1 className={authCss.title}>Add new post</h1>
      <Form>
          <Field
            id="title"
            label="Title"
            value={title}
            type="text"
            placeholder="Mi increible texto"
            onChange={(v) => setTitle(v.target.value)}
          />
          <Field
            id="content"
            label="Content"
            value={content}
            type="textarea"
            placeholder="Contenido del increible post"
            onChange={(v) => setContent(v.target.value)}
          />
          <Field
            id="image"
            label="Image"
            value={image}
            type="file"
            onChange={(v) => setImage(v.target.value)}
          />

          <Error error={error} />
          <Success message={success} />

          <Button className={authCss.submit} onClick={submit} block>Publicar</Button>
        </Form>
    </div>
  )
}
