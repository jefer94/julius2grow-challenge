import { Button, Form } from 'reactstrap'

import { ReactElement, useState } from 'react'
import axios from 'axios'
import Error from '../components/Error'
import css from './Auth.module.css'
import setToken from '../hooks/setToken'
import Field from '../components/Field'
// import Navbar from '../components/Navbar'

export default function Register(): ReactElement {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')

  async function submit() {
    setError('')
    if (username && email && password && password === newPassword) {
      const response = await axios.post('http://localhost:9000/users', { username, email, password })
      const { token } = response.data

      if (!token) {
        const [error] = response.data.errors
        if (error === 'dup key: username') setError('Nombre de usuario duplicado')
        else if (error === 'dup key: email') setError('Email duplicado')
        else setError('Error desconocido')
        return
      }

      setToken(token)
    }
    else if (!username) setError('Nombre de usuario vacio')
    else if (!email) setError('Correo vacio')
    else if (!password) setError('Contraseña vacia')
    else setError('Contraseñas no coinciden')
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
            id="email"
            label="Email"
            value={email}
            type="email"
            placeholder="Konan@gmail.com"
            onChange={(v) => setEmail(v.target.value)}
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
          <Field
            id="new-password"
            label="Repeat password"
            value={newPassword}
            autoComplete="new-password"
            type="password"
            placeholder="P4ssw0rd!"
            onChange={(v) => setNewPassword(v.target.value)}
          />

          <Error error={error} />

          <span className={css.alternative}>Ya tienes una cuenta?</span>
          <a className={css.link} href="/register">acceder</a>

          <Button className={css.submit} onClick={submit} block>Ingresar</Button>
        </Form>
      </div>
    </div> 
  )
}
