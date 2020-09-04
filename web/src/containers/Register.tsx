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
            <Label className={inputCss.label} for="username">Username</Label>
            <Input autoComplete="username" className={inputCss.input} type="text" name="username" id="username" placeholder="Konan" />
          </FormGroup>
          <FormGroup>
            <Label className={inputCss.label} for="email">Email</Label>
            <Input className={inputCss.input} type="email" name="email" id="email" placeholder="Konan@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label className={inputCss.label} for="current-password">Password</Label>
            <Input autoComplete="current-password" className={inputCss.input} type="password" name="current-password" id="current-password" placeholder="P4ssw0rd!" />
          </FormGroup>
          <FormGroup>
            <Label className={inputCss.label} for="new-password">Repeat password</Label>
            <Input autoComplete="new-password" className={inputCss.input} type="password" name="new-password" id="new-password" placeholder="P4ssw0rd!" />
          </FormGroup>
          <Error />
          <span className={authCss.alternative}>Ya tienes una cuenta?</span>
          <a className={authCss.link} href="/register">acceder</a>

          <Button className={authCss.submit} block>Ingresar</Button>
        </Form>
      </div>
    </div> 
  )
}