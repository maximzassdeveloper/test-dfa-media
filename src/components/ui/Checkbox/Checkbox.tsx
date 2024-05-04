import { InputHTMLAttributes, forwardRef } from 'react'
import { classNames } from '@/utils/classNames'
import s from './Checkbox.module.scss'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, className, ...rest } = props

  return (
    <label className={s.label}>
      {label}
      <input ref={ref} type='checkbox' className={classNames(s.input, className)} {...rest} />
      <span className={s.checkmark}>{/* <CheckIcon /> */}</span>
    </label>
  )
})
