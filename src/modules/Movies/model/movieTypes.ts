export interface Movie {
	id: number
	title: string
	adult: boolean
	poster_path: string
	release_date: string
	overview: string
	vote_average: number
	vote_count: number
}

export type MovieSortType = 'popularity.desc' | 'primary_release_date.desc' | 'vote_average.desc'

export interface MovieFilters {
	genres?: number[]
	sortBy?: MovieSortType
}
