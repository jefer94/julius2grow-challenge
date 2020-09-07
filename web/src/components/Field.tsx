import { FormGroup, Label, Input } from 'reactstrap'

import { ReactElement } from 'react'
import css from './Field.module.css'
import { InputType } from 'reactstrap/lib/Input'

interface OnChangeProps {
  readonly target: {
    readonly value?: string
    readonly files?: FileList
  }
}

type FieldProps = {
  readonly type?: InputType
  readonly id: string
  readonly label: string
  readonly value?: number | string | FileList
  readonly onChange: (v: OnChangeProps) => void
  readonly placeholder?: string
  readonly autoComplete?: string
}

export default function Field({ id, type, label, value, onChange, placeholder, autoComplete }: FieldProps): ReactElement {
  return (
    <FormGroup>
      <Label
        className={css.label}
        for={id}
      >
        {label}
      </Label>

      <Input
        className={css.input}
        autoComplete={autoComplete}
        value={value} onChange={onChange}
        type={type || 'text'}
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </FormGroup>
  )
}
