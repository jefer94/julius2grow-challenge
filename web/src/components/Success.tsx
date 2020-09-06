import css from './Error.module.css'
import { ReactElement } from 'react'

type SuccessProps = {
  readonly message?: string
}

export default function Error({ message }: SuccessProps): ReactElement {
  return (
    message ? <span className={css.success}>{message}</span> : <></>
  )
}