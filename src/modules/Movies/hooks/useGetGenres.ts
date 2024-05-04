import { useQuery } from '@tanstack/react-query'
import { GetGenresResponse, getGenres } from '../api/MoviesApi'
import { UseQueryOptionsDto } from '@/libs/reactQuery'

const GET_GENRES_QUERY_KEY = 'genres'

export function useGetGenres(options?: UseQueryOptionsDto<GetGenresResponse>) {
  return useQuery({
    queryKey: [GET_GENRES_QUERY_KEY],
    queryFn: getGenres,
    ...options,
  })
}
