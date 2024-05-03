'use client'

import { useAppDispatch } from '@/store/storeHooks'
import { FC, useEffect } from 'react'
import { createRequestToken, createSessionId } from '../api/AuthApi'
import { Modal } from '@/components/ui'
import { useRouter, useSearchParams } from 'next/navigation'

export const AuthModal: FC = () => {
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
		<div>
			<Modal visible={false}>
				<h2>Вход</h2>
				<button onClick={handleAuth}>Авторизоваться</button>
			</Modal>
		</div>
	)
}
