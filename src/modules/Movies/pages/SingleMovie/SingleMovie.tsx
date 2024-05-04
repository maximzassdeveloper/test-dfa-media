'use client'

import { FC } from 'react'
import { useGetMovieDetails } from '../../hooks/useGetMovieDetails'
import { MovieDetails } from '../../ui/MovieDetails/MovieDetails'
import { Container } from '@/components/ui'
import s from './SingleMovie.module.scss'

interface SingleMovieProps {
  movieId: number
}

export const SingleMovie: FC<SingleMovieProps> = (props) => {
  const { movieId } = props

  const { data, isLoading } = useGetMovieDetails(movieId)

  console.log(data?.data)

  return <Container>{data?.data && <MovieDetails movie={data.data} />}</Container>
}
