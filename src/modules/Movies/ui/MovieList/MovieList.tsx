import { FC } from 'react'
import { Movie } from '../../model/movieTypes'
import { MovieItem } from '../MovieItems/MovieItem/MovieItem'
import { Spinner } from '@/components/ui'
import s from './MovieList.module.scss'

interface MovieListProps {
  movies: Movie[]
  isLoading?: boolean
}

export const MovieList: FC<MovieListProps> = (props) => {
  const { movies, isLoading } = props

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : movies.length === 0 ? (
        <p>Фильмов нет</p>
      ) : (
        <div className={s.list}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}
