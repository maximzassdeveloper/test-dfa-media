import { useQuery } from '@tanstack/react-query'
import { GetSearchMoviesResponse, getSearchMovies } from '../api/MoviesApi'
import { UseQueryOptionsDto } from '@/libs/reactQuery'

const GET_MOVIES_SEARCH_QUERY_KEY = 'movies/search'

export function useSearchMovies(
  query: string,
  options?: UseQueryOptionsDto<GetSearchMoviesResponse>
) {
  return useQuery({
    queryKey: [query, GET_MOVIES_SEARCH_QUERY_KEY],
    queryFn: () => getSearchMovies(query),
    ...options,
  })
}
