import { FC } from 'react'
import Image from 'next/image'
import { Movie } from '../../../model/movieTypes'
import { MovieRating } from '../../MovieRating/MovieRating'
import { imgPath } from '@/utils/imgPath'
import s from './BannerMovieItem.module.scss'

interface BannerMovieItemProps {
  movie: Movie
}

export const BannerMovieItem: FC<BannerMovieItemProps> = (props) => {
  const { movie } = props

  return (
    <div className={s.movieSlide}>
      <div className={s.backdrop} />

      <div className={s.info}>
        <h3 className={s.movieTitle}>{movie.title}</h3>
        <MovieRating rating={movie.vote_average} />

        <p className={s.overview}>
          {movie.overview.slice(0, 300)}
          {movie.overview.length > 300 && '...'}
        </p>
      </div>

      <div className={s.moviePoster}>
        <Image src={imgPath(movie.backdrop_path, 1280)} alt={movie.title} fill />
      </div>
    </div>
  )
}
