'use client'

import { ButtonHTMLAttributes, forwardRef, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Spinner } from '../Spinner/Spinner'
import { classNames } from '@/utils/classNames'
import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: 'secondary' | 'primary'
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, type = 'button', theme = 'primary', className, loading, ...rest } = props

  const [disabled, setDisabled] = useState(props.disabled)
  const disabledRef = useRef(props.loading)

  useEffect(() => {
    setDisabled(props.disabled)
  }, [props.disabled])

  // Disable button on loading
  useEffect(() => {
    if (loading) {
      disabledRef.current = disabled
      setDisabled(true)
    } else {
      setDisabled(!!disabledRef.current)
    }
    // eslint-disable-next-line
  }, [loading])

  return (
    <button
      ref={ref}
      type={type}
      className={classNames(s.button, className, s[theme], { [s.loading]: loading })}
      disabled={disabled}
      {...rest}
    >
      <span className={s.text}>{children}</span>
      <CSSTransition timeout={200} in={loading} classNames='fade' mountOnEnter unmountOnExit>
        <div className={s.loader}>
          <Spinner />
        </div>
      </CSSTransition>
    </button>
  )
})
