import { useQuery } from '@tanstack/react-query'
import { GetMoviesResponse, getMovies } from '../api/MoviesApi'
import { MovieFilters } from '../model/movieTypes'
import { UseQueryOptionsDto } from '@/libs/reactQuery'

const GET_MOVIES_QUERY_KEY = 'movies'

export function useGetMovies(
  filters: MovieFilters,
  options?: UseQueryOptionsDto<GetMoviesResponse>
) {
  return useQuery({
    queryKey: [filters, GET_MOVIES_QUERY_KEY],
    queryFn: () => getMovies(filters),
    ...options,
  })
}
