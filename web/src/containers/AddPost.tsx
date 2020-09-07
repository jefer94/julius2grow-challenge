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

export default function AddPost(): ReactElement {
  const { addPost } = useContext(PostsContext)
  const [image, setImage] = useState<FileList>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')


  async function urlOfImage(): Promise<string> {
    if (image && image[0]) {
      var data = new FormData()
      data.append('banner', image[0], 'filename')
      const response = await axios.post('http://localhost:9000/images', data,
            { headers: { ...construcHeaders(), 'Content-Type': 'multipart/form-data' } })
      return response.data.data
    }
    return ''
  }

  async function submit() {
    // const image = '/'
    setError('')
    if (title && content && image && image[0]) {
      try {
        urlOfImage()
        const response = await axios.post('http://localhost:9000/posts', { title, content, image: await urlOfImage() },
          { headers: construcHeaders() })
        
        if (!response.data.data) {
          setError('Error desconocido')
          return
        }
  
        setTitle('')
        setContent('')
        setImage(null)
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
    <div className={css.container}>
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
            // value={image}
            type="file"
            onChange={(v) => setImage(v.target.files)}
          />

          <Error error={error} />
          <Success message={success} />

          <Button id="add-post" className={authCss.submit} onClick={submit} block>Publicar</Button>
        </Form>
    </div>
  )
}
