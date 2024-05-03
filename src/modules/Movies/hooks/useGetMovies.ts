import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { GetMoviesResponse, getMovies } from '../api/MoviesApi'

const GET_MOVIES_QUERY_KEY = 'movies'

export function useGetMovies(
	options?: Omit<
		UseQueryOptions<AxiosResponse<GetMoviesResponse>, AxiosError, AxiosResponse<GetMoviesResponse>>,
		'queryFn' | 'queryKey'
	>
) {
	return useQuery({
		queryKey: [GET_MOVIES_QUERY_KEY],
		queryFn: getMovies,
		...options,
	})
}
