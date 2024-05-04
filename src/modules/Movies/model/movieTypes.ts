export interface Movie {
  id: number
  title: string
  adult: boolean
  poster_path: string
  backdrop_path: string
  release_date: string | null
  overview: string
  vote_average: number
  vote_count: number
}

export type MovieSortType =
  | 'popularity.desc'
  | 'primary_release_date.desc'
  | 'vote_average.desc'
  | 'vote_average.asc'

export interface MovieFilters {
  genres?: number[]
  sortBy?: MovieSortType
  page?: number
}

export interface Genre {
  id: number
  name: string
}

export interface FullMovie {
  id: number
  adult: false
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string | null
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Actor {
  id: number
  gender: 1 | 2
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}
