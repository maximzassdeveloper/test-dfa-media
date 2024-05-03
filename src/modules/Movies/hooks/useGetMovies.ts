import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { GetMoviesResponse, getMovies } from '../api/MoviesApi'
import { MovieFilters } from '../model/movieTypes'

const GET_MOVIES_QUERY_KEY = 'movies'

export function useGetMovies(
	filters: MovieFilters,
	options?: Omit<
		UseQueryOptions<AxiosResponse<GetMoviesResponse>, AxiosError, AxiosResponse<GetMoviesResponse>>,
		'queryFn' | 'queryKey'
	>
) {
	return useQuery({
		queryKey: [filters, GET_MOVIES_QUERY_KEY],
		queryFn: () => getMovies(filters),
		...options,
	})
}
