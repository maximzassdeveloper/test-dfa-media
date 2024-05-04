import { FC, ReactNode } from 'react'
import { classNames } from '@/utils/classNames'
import s from './Container.module.scss'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, className } = props
  return <div className={classNames(s.container, className)}>{children}</div>
}
