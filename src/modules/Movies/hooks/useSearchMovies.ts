import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { GetSearchMoviesResponse, getSearchMovies } from '../api/MoviesApi'

const GET_MOVIES_SEARCH_QUERY_KEY = 'movies/search'

export function useSearchMovies(
	query: string,
	options?: Omit<
		UseQueryOptions<
			AxiosResponse<GetSearchMoviesResponse>,
			AxiosError,
			AxiosResponse<GetSearchMoviesResponse>
		>,
		'queryFn' | 'queryKey'
	>
) {
	return useQuery({
		queryKey: [query, GET_MOVIES_SEARCH_QUERY_KEY],
		queryFn: () => getSearchMovies(query),
		...options,
	})
}
