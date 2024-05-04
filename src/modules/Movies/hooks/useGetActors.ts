import { useQuery } from '@tanstack/react-query'
import { GetActorsResponse, getActors } from '../api/MoviesApi'
import { UseQueryOptionsDto } from '@/libs/reactQuery'

const GET_ACTORS_QUERY_KEY = 'actors'

export function useGetActors(movieId: number, options?: UseQueryOptionsDto<GetActorsResponse>) {
  return useQuery({
    queryKey: [movieId, GET_ACTORS_QUERY_KEY],
    queryFn: () => getActors(movieId),
    ...options,
  })
}
