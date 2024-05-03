import { FC } from 'react'
import { Movie } from '../../model/movieTypes'
import { MovieItem } from '../MovieItem/MovieItem'
import s from './MovieList.module.scss'

interface MovieListProps {
	movies: Movie[]
	isLoading?: boolean
}

export const MovieList: FC<MovieListProps> = (props) => {
	const { movies, isLoading } = props

	return (
		<div className={s.list}>
			{isLoading ? (
				<p>Красивая загрузка...</p>
			) : movies.length === 0 ? (
				<p>Фильмов нет</p>
			) : (
				movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
			)}
		</div>
	)
}
