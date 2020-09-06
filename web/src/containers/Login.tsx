import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { ReactElement, useState } from 'react'
import axios from 'axios'
import Error from '../components/Error'
// import Head from 'next/head'
import css from './Auth.module.css'
import setToken from '../hooks/setToken'
import Field from '../components/Field'
// import Navbar from '../components/Navbar'

export default function Login(): ReactElement {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function submit() {
    setError('')
    if (username && password) {
      const response = await axios.post('http://localhost:9000/token', { username, password })
      const { token } = response.data

      if (!token) {
        setError('Nombre de usuario o contraseña equivocado')
        return
      }

      setToken(token)
    }
    else if (!username) setError('Nombre de usuario vacio')
    else setError('Contraseña vacia')
  }

  return (
    <div className={css.flex}>
      <div className={css.container}>
        <h1 className={css.title}>Login in Violet Blog</h1>
        <p className={css.description}>Get access to our awesome blog comunity</p>
        <Form>
          <Field
            id="username"
            label="Username"
            value={username}
            autoComplete="username"
            type="text"
            placeholder="Konan"
            onChange={(v) => setUsername(v.target.value)}
          />
          <Field
            id="current-password"
            label="Password"
            value={password}
            autoComplete="current-password"
            type="password"
            placeholder="P4ssw0rd!"
            onChange={(v) => setPassword(v.target.value)}
          />

          <Error error={error} />

          <span className={css.alternative}>Aun no tienes una cuenta?</span>
          <a className={css.link} href="/register">registrate</a>

          <Button className={css.submit} onClick={submit} block>Ingresar</Button>
        </Form>
      </div>
    </div> 
  )
}
