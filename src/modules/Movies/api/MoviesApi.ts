import baseAxios from '@/config/axiosService'
import { Movie, MovieFilters } from '../model/movieTypes'

export interface GetMoviesNowPlayingResponse {
	page: number
	results: Movie[]
}

export const getMoviesNowPlaying = () => {
	return baseAxios.get<GetMoviesNowPlayingResponse>('/movie/now_playing')
}

export interface GetMoviesResponse {
	page: number
	results: Movie[]
}

export const getMovies = (filters: MovieFilters) => {
	return baseAxios.get<GetMoviesResponse>('/discover/movie', {
		params: {
			sort_by: filters.sortBy,
			with_genres: filters.genres?.join(','),
		},
	})
}

export interface GetSearchMoviesResponse {
	page: number
	results: Movie[]
}

export const getSearchMovies = (query: string) => {
	return baseAxios.get<GetSearchMoviesResponse>('/search/movie', { params: { query } })
}
