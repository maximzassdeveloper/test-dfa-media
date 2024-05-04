'use client'

import { FC, memo } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui'
import { SearchMovies } from '@/modules/Movies'
import { AuthModalWithBtn, logout, useAuth } from '@/modules/Auth'
import { useAppDispatch } from '@/libs/store'
import s from './Header.module.scss'

export const Header: FC = memo(() => {
  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div className={s.menu}>
          <Link href={'/'} className={s.link}>
            Главная
          </Link>

          {isAuth && (
            <span className={s.link} onClick={logoutHandler}>
              Выйти
            </span>
          )}

          {!isAuth && <AuthModalWithBtn />}
        </div>
        <SearchMovies />
      </Container>
    </header>
  )
})
