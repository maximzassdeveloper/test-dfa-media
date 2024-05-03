import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { GetMoviesNowPlayingResponse, getMoviesNowPlaying } from '../api/MoviesApi'

const GET_MOVIES_NOW_PLAYING_QUERY_KEY = 'movies/playing_now'

export function useGetMoviesNowPlaying(
	options?: Omit<
		UseQueryOptions<
			AxiosResponse<GetMoviesNowPlayingResponse>,
			AxiosError,
			AxiosResponse<GetMoviesNowPlayingResponse>
		>,
		'queryFn' | 'queryKey'
	>
) {
	return useQuery({
		queryKey: [GET_MOVIES_NOW_PLAYING_QUERY_KEY],
		queryFn: getMoviesNowPlaying,
		...options,
	})
}
