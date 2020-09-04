import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

import { ReactElement } from 'react'
import Error from '../components/Error'
// import Head from 'next/head'
import inputCss from './Input.module.css'
import authCss from './Auth.module.css'
// import Navbar from '../components/Navbar'

export default function Home(): ReactElement {
  return (
    <div className={authCss.flex}>
      <div className={authCss.container}>
        <h1 className={authCss.title}>Login in Violet Blog</h1>
        <p className={authCss.description}>Get access to our awesome blog comunity</p>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input autoComplete="username" className={inputCss.input} type="text" name="username" id="username" placeholder="Konan" />
          </FormGroup>
          <FormGroup>
            <Label className={inputCss.label} for="current-password">Password</Label>
            <Input autoComplete="current-password" className={inputCss.input} type="password" name="current-password" id="current-password" placeholder="P4ssw0rd!" />
          </FormGroup>
          <Error />
          <span className={authCss.alternative}>Aun no tienes una cuenta?</span>
          <a className={authCss.link} href="/register">registrate</a>

          <Button className={authCss.submit} block>Ingresar</Button>
        </Form>
      </div>
    </div> 
  )
}
