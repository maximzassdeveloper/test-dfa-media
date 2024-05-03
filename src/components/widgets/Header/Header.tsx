import { FC, memo } from 'react'
import { Container } from '@/components/ui'
import { SearchMovies } from '@/modules/Movies'
import s from './Header.module.scss'

export const Header: FC = memo(() => {
	return (
		<header className={s.header}>
			<Container className={s.container}>
				{/* <span className={s.logo}>TMDB API</span> */}
				<SearchMovies />
			</Container>
		</header>
	)
})
