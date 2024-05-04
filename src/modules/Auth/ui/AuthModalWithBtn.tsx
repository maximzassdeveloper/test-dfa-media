import { FC, Suspense, useState } from 'react'
import { AuthModal } from './AuthModal'
import s from './AuthModal.module.scss'

export const AuthModalWithBtn: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Suspense>
        <AuthModal visible={isVisible} onChangeVisible={setIsVisible} />
      </Suspense>
      <span className={s.link} onClick={() => setIsVisible(true)}>
        Войти
      </span>
    </>
  )
}
