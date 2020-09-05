import errorCss from './Error.module.css'
import { ReactElement } from 'react'

type ErrorProps = {
  readonly error?: string
}

export default function Error({ error }: ErrorProps): ReactElement {
  return (
    error ? <span className={errorCss.error}>{error}</span> : <></>
  )
}