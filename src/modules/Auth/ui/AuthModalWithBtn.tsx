import { FC, useState } from 'react'
import { AuthModal } from './AuthModal'
import s from './AuthModal.module.scss'

export const AuthModalWithBtn: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <AuthModal visible={isVisible} onChangeVisible={setIsVisible} />
      <span className={s.link} onClick={() => setIsVisible(true)}>
        Войти
      </span>
    </>
  )
}
