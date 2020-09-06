import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

import { ReactElement, useState } from 'react'
import axios from 'axios'
import Error from '../components/Error'
// import Head from 'next/head'
import inputCss from './Input.module.css'
import authCss from './Auth.module.css'
import setToken from '../hooks/setToken'
// import Navbar from '../components/Navbar'

export default function Home(): ReactElement {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')

  async function submit() {
    setError('')
    if (username && email && password && password === newPassword) {
      console.log('aaa')
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
    <div className={authCss.flex}>
      <div className={authCss.container}>
        <h1 className={authCss.title}>Login in Violet Blog</h1>
        <p className={authCss.description}>Get access to our awesome blog comunity</p>
        <Form>
          <FormGroup>
            <Label className={inputCss.label} for="username">Username</Label>
            <Input autoComplete="username" value={username} onChange={(v) => setUsername(v.target.value)} className={inputCss.input} type="text" name="username" id="username" placeholder="Konan" />
          </FormGroup>
          <FormGroup>
            <Label className={inputCss.label} for="email">Email</Label>
            <Input className={inputCss.input} type="email" value={email} onChange={(v) => setEmail(v.target.value)} name="email" id="email" placeholder="Konan@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label className={inputCss.label} for="current-password">Password</Label>
            <Input autoComplete="current-password" value={password} onChange={(v) => setPassword(v.target.value)} className={inputCss.input} type="password" name="current-password" id="current-password" placeholder="P4ssw0rd!" />
          </FormGroup>
          <FormGroup>
            <Label className={inputCss.label} for="new-password">Repeat password</Label>
            <Input autoComplete="new-password" value={newPassword} onChange={(v) => setNewPassword(v.target.value)} className={inputCss.input} type="password" name="new-password" id="new-password" placeholder="P4ssw0rd!" />
          </FormGroup>
          <Error error={error} />
          <span className={authCss.alternative}>Ya tienes una cuenta?</span>
          <a className={authCss.link} href="/register">acceder</a>

          <Button className={authCss.submit} onClick={submit} block>Ingresar</Button>
        </Form>
      </div>
    </div> 
  )
}
