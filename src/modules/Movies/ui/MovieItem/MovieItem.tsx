import { FC } from 'react'
import { Movie } from '../../model/movieTypes'
import s from './MovieItem.module.scss'
import Image from 'next/image'
import { imgPath } from '@/utils/imgPath'
import { MovieRating } from '../MovieRating/MovieRating'

interface MovieItemProps {
	movie: Movie
}

export const MovieItem: FC<MovieItemProps> = (props) => {
	const { title, adult, poster_path, release_date, vote_average } = props.movie

	return (
		<div className={s.movieItem}>
			<img
				className={s.poster}
				src={imgPath(poster_path, 300)}
				alt={title + 'poster'}
				// width={215}
				// height={335}
			/>

			<div className={s.info}>
				<div className={s.infoContent}>
					<MovieRating rating={vote_average} />

					<h3 className={s.title}>{title}</h3>

					<span className={s.date}>{release_date.split('-')[0]}</span>
				</div>
			</div>
		</div>
	)
}
