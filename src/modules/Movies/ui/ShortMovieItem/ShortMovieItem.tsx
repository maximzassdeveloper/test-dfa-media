import { FC } from 'react'
import { Movie } from '../../model/movieTypes'
import { MovieRating } from '../MovieRating/MovieRating'
import { imgPath } from '@/utils/imgPath'
import s from './ShortMovieItem.module.scss'

interface ShortMovieItemProps {
	movie: Movie
}

export const ShortMovieItem: FC<ShortMovieItemProps> = (props) => {
	const { title, poster_path, vote_average } = props.movie

	return (
		<div className={s.shortMovieItem}>
			<img
				className={s.poster}
				src={imgPath(poster_path, 200)}
				alt={title + 'poster'}
				// width={215}
				// height={335}
			/>

			<div className={s.info}>
				<h3 className={s.title}>{title}</h3>
				<MovieRating rating={vote_average} size='small' />
			</div>
		</div>
	)
}
