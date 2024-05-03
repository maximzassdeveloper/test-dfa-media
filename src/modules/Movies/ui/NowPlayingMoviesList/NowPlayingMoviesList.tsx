'use client'

import { FC, memo } from 'react'
import { useGetMoviesNowPlaying } from '../../hooks/useGetMoviesNowPlaying'
import { MovieList } from '../MovieList/MovieList'

export const NowPlayingMoviesList: FC = memo(() => {
	const { data, isLoading } = useGetMoviesNowPlaying()

	return <MovieList movies={data?.data.results ?? []} isLoading={isLoading} />
})
