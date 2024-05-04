import { baseAxios } from '@/libs/api'
import { Actor, FullMovie, Genre, Movie, MovieFilters } from '../model/movieTypes'

export interface GetMoviesNowPlayingResponse {
  page: number
  results: Movie[]
}

export const getMoviesNowPlaying = () => {
  return baseAxios.get<GetMoviesNowPlayingResponse>('/movie/now_playing')
}

export interface GetMoviesResponse {
  page: number
  total_pages: number
  total_results: number
  results: Movie[]
}

export const getMovies = (filters: MovieFilters) => {
  return baseAxios.get<GetMoviesResponse>('/discover/movie', {
    params: {
      sort_by: filters.sortBy,
      with_genres: filters.genres?.join(','),
      page: filters.page,
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

export interface GetGenresResponse {
  genres: Genre[]
}

export const getGenres = () => {
  return baseAxios.get<GetGenresResponse>('/genre/movie/list')
}

export type GetMovieDetailsResponse = FullMovie

export const getMovieDetails = (movieId: number) => {
  return baseAxios.get<GetMovieDetailsResponse>(`/movie/${movieId}`)
}

export interface GetActorsResponse {
  id: number
  cast: Actor[]
}

export const getActors = (movieId: number) => {
  return baseAxios.get<GetActorsResponse>(`/movie/${movieId}/credits`)
}
