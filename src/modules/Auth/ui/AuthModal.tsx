'use client'

import { FC, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch } from '@/libs/store/storeHooks'
import { Modal } from '@/components/ui'
import { createRequestToken, createSessionId } from '../api/AuthApi'

interface AuthModalProps {
  visible: boolean
  onChangeVisible: (val: boolean) => void
}

export const AuthModal: FC<AuthModalProps> = (props) => {
  const { visible, onChangeVisible } = props

  const dispatch = useAppDispatch()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleAuth = async () => {
    const resp = await dispatch(createRequestToken()).unwrap()
    if (resp.success) {
      router.push(
        `https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=${window.location.href}`
      )
    }
  }

  useEffect(() => {
    console.log('reinit')
    const request_token_param = searchParams.get('request_token')
    const approved_param = searchParams.get('approved')

    if (approved_param === 'true' && request_token_param) {
      dispatch(createSessionId(request_token_param))
    }
  }, [])

  return (
    <Modal visible={visible} onClose={() => onChangeVisible(false)}>
      <h2>Авторизация</h2>
      <button onClick={handleAuth}>Авторизоваться</button>
    </Modal>
  )
}
