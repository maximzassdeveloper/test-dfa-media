import { FC } from 'react'
import { FullMovie } from '../../model/movieTypes'
import Image from 'next/image'
import { imgPath } from '@/utils/imgPath'
import { MovieRating } from '../MovieRating/MovieRating'
import { ActorsList } from '../ActorsList/ActorsList'
import { formatSplitNum } from '@/utils/formatSplitNum'
import s from './MovieDetails.module.scss'

interface MovieDetailsProps {
  movie: FullMovie
}

export const MovieDetails: FC<MovieDetailsProps> = (props) => {
  const {
    id,
    title,
    vote_average,
    vote_count,
    overview,
    budget,
    runtime,
    tagline,
    revenue,
    poster_path,
    origin_country,
    genres,
    release_date,
  } = props.movie

  const attributesData = {
    'Год производства': release_date?.split('-')[0],
    'Слоган': tagline,
    'Жанр': genres.map((genre) => genre.name).join(', '),
    'Продолжительность': `${runtime} минут`,
    'Бюджет': '$' + formatSplitNum(budget),
    'Доход': '$' + formatSplitNum(revenue),
    'Страна производства': origin_country.join(', '),
  }

  return (
    <div className={s.movieDetails}>
      <div className={s.posterContainer}>
        <Image
          className={s.poster}
          src={imgPath(poster_path, 300)}
          priority
          alt={title + ' Постер'}
          fill
        />
      </div>

      <div className={s.info}>
        <h1 className={s.title}>{title}</h1>
        <MovieRating rating={vote_average} viewsCount={vote_count} />
        <p className={s.overview}>{overview}</p>

        <h2 className={s.subtitle}>О фильме</h2>
        <div className={s.attributes}>
          {Object.entries(attributesData).map(([attrLabel, attrValue]) => (
            <div key={attrLabel} className={s.attribute}>
              <span className={s.attributeLabel}>{attrLabel}: </span>
              <span className={s.attributeValue}>{attrValue || '-'}</span>
            </div>
          ))}
        </div>

        <h2 className={s.subtitle}>В главных ролях</h2>
        <ActorsList movieId={id} />
      </div>
    </div>
  )
}
