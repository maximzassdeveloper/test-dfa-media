import { FC, useState } from 'react'
import { AuthModal } from './AuthModal'

export const AuthModalWithBtn: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <AuthModal visible={isVisible} onChangeVisible={setIsVisible} />
      <span onClick={() => setIsVisible(true)}>Войти</span>
    </>
  )
}
