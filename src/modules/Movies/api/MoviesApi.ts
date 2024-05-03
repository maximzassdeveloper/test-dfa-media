import baseAxios from '@/config/axiosService'
import { Movie } from '../model/movieTypes'

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

export const getMovies = () => {
	return baseAxios.get<GetMoviesResponse>('/discover/movie')
}

export interface GetSearchMoviesResponse {
	page: number
	results: Movie[]
}

export const getSearchMovies = (query: string) => {
	return baseAxios.get<GetSearchMoviesResponse>('/search/movie', { params: { query } })
}
