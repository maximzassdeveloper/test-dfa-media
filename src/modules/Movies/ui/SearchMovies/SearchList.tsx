import { FC } from 'react'
import { Movie } from '../../model/movieTypes'
import { ShortMovieItem } from '../ShortMovieItem/ShortMovieItem'
import s from './SearchMovies.module.scss'

interface SearchListProps {
	movies: Movie[]
	isLoading?: boolean
}

export const SearchList: FC<SearchListProps> = (props) => {
	const { movies, isLoading } = props

	return (
		<div className={s.list}>
			{isLoading ? (
				<p>Красивая загрузка...</p>
			) : movies.length === 0 ? (
				<p className={s.noResults}>Результатов с таким запросом нет</p>
			) : (
				movies.map((movie) => <ShortMovieItem key={movie.id} movie={movie} />)
			)}
		</div>
	)
}
