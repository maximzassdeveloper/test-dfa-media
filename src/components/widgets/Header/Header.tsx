'use client'

import { FC, memo } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui'
import { SearchMovies } from '@/modules/Movies'
import { AuthModalWithBtn, useAuth } from '@/modules/Auth'
import s from './Header.module.scss'

export const Header: FC = memo(() => {
  const { isAuth } = useAuth()

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <Link href={'/'} className={s.link}>
          Главная
        </Link>
        {isAuth && (
          <Link href={'/favorite'} className={s.link}>
            Избранное
          </Link>
        )}
        {isAuth && <span className={s.link}>Выйти</span>}

        {!isAuth && <AuthModalWithBtn />}
        <SearchMovies />
      </Container>
    </header>
  )
})
