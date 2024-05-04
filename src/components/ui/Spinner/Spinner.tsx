import { FC } from 'react'
import s from './Spinner.module.scss'

export const Spinner: FC = () => {
  return (
    <div className={s.spinnerContainer}>
      <div className={s.loader} />
    </div>
  )
}
