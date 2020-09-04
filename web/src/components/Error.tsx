import errorCss from '../styles/Navbar.module.css'
import { ReactElement } from 'react'

type ErrorProps = {
  readonly error?: string
}

export default function Error({ error }: ErrorProps): ReactElement {
  return (
    error ? <p className={errorCss.error}>{error}</p> : <></>
  )
}