'use client'

import { FC } from 'react'
import { MovieList } from '../MovieList/MovieList'
import { useGetMovies } from '../../hooks/useGetMovies'

export const Catalog: FC = () => {
	const { data, isLoading } = useGetMovies()

	return (
		<>
			<MovieList movies={data?.data.results ?? []} isLoading={isLoading} />
		</>
	)
}
