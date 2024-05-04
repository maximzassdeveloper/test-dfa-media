'use client'

import { FC, memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Movie } from '../../model/movieTypes'
import { BannerMovieItem } from '../MovieItems/BannerMovieItem/BannerMovieItem'

import 'swiper/css'
import 'swiper/css/navigation'
import s from './MoviesSlider.module.scss'

interface MoviesSliderProps {
  movies: Movie[]
}

export const MoviesSlider: FC<MoviesSliderProps> = memo((props) => {
  const { movies } = props

  return (
    <Swiper
      className={s.moviesSlider}
      navigation={true}
      autoplay={{
        delay: 8_000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <BannerMovieItem movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
})
