import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Movie } from '../../../model/movieTypes'
import { imgPath } from '@/utils/imgPath'
import { MovieRating } from '../../MovieRating/MovieRating'
import s from './MovieItem.module.scss'

interface MovieItemProps {
  movie: Movie
}

export const MovieItem: FC<MovieItemProps> = (props) => {
  const { id, title, poster_path, release_date, vote_average } = props.movie

  return (
    <Link href={`/movie/${id}`} className={s.movieItem}>
      <Image className={s.poster} src={imgPath(poster_path, 300)} alt={title + 'poster'} fill />

      <div className={s.info}>
        <div className={s.infoContent}>
          <MovieRating rating={vote_average} />

          <h3 className={s.title}>{title}</h3>

          <span className={s.date}>{release_date?.split('-')[0]}</span>
        </div>
      </div>
    </Link>
  )
}
