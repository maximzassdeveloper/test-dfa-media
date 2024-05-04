'use client'

import { FC, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch } from '@/libs/store/storeHooks'
import { Button, Modal } from '@/components/ui'
import { createRequestToken, createSessionId } from '../api/AuthApi'
import s from './AuthModal.module.scss'

interface AuthModalProps {
  visible: boolean
  onChangeVisible: (val: boolean) => void
}

export const AuthModal: FC<AuthModalProps> = (props) => {
  const { visible, onChangeVisible } = props

  const dispatch = useAppDispatch()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const redirectToExternalAuth = (request_token: string) => {
    router.push(
      `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${window.location.href}`
    )
  }

  const handleAuth = async () => {
    const resp = await dispatch(createRequestToken()).unwrap()

    if (resp.success && resp.request_token) {
      redirectToExternalAuth(resp.request_token)
    }
  }

  useEffect(() => {
    const request_token_param = searchParams.get('request_token')
    const approved_param = searchParams.get('approved')

    if (approved_param === 'true' && request_token_param) {
      dispatch(createSessionId(request_token_param))
    }

    router.push(pathname)
  }, [dispatch, searchParams, router, pathname])

  return (
    <Modal visible={visible} onClose={() => onChangeVisible(false)}>
      <div className={s.content}>
        <h2 className={s.title}>Авторизация</h2>
        <Button onClick={handleAuth}>Авторизоваться</Button>
        <p className={s.desc}>
          Аворизация происходит через TMDB, поэтому вы щас будете перенаправлены на другой сайт.
          После одобрения вас перенравит обратно
        </p>
      </div>
    </Modal>
  )
}
