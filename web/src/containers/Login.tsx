import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { ReactElement, useState } from 'react'
import axios from 'axios'
import Error from '../components/Error'
// import Head from 'next/head'
import inputCss from './Input.module.css'
import authCss from './Auth.module.css'
// import Navbar from '../components/Navbar'

export default function Login(): ReactElement {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function submit() {
    setError('')
    if (username && password) {
      console.log('aaa')
      const response = await axios.post('http://localhost:9000/token', { username, password })
      const { data } = response.data

      if (!data)
        setError('Nombre de usuario o contraseña equivocado')
    }
    else if (!username) setError('Nombre de usuario vacio')
    else setError('Contraseña vacia')
  }

  return (
    <div className={authCss.flex}>
      <div className={authCss.container}>
        <h1 className={authCss.title}>Login in Violet Blog</h1>
        <p className={authCss.description}>Get access to our awesome blog comunity</p>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input autoComplete="username" value={username} onChange={(v) => setUsername(v.target.value)} className={inputCss.input} type="text" name="username" id="username" placeholder="Konan" />
          </FormGroup>
          <FormGroup>
            <Label className={inputCss.label} for="current-password">Password</Label>
            <Input autoComplete="current-password" value={password} onChange={(v) => setPassword(v.target.value)} className={inputCss.input} type="password" name="current-password" id="current-password" placeholder="P4ssw0rd!" />
          </FormGroup>
          <Error error={error} />
          <span className={authCss.alternative}>Aun no tienes una cuenta?</span>
          <a className={authCss.link} href="/register">registrate</a>

          <Button className={authCss.submit} onClick={submit} block>Ingresar</Button>
        </Form>
      </div>
    </div> 
  )
}
