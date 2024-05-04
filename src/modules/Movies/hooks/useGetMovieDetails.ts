import { useQuery } from '@tanstack/react-query'
import { GetMovieDetailsResponse, getMovieDetails } from '../api/MoviesApi'
import { UseQueryOptionsDto } from '@/libs/reactQuery'

const GET_MOVIES_DETAILS_QUERY_KEY = 'movies/details'

export const useGetMovieDetails = (
  movieId: number,
  options?: UseQueryOptionsDto<GetMovieDetailsResponse>
) => {
  return useQuery({
    queryKey: [movieId, GET_MOVIES_DETAILS_QUERY_KEY],
    queryFn: () => getMovieDetails(movieId),
    ...options,
  })
}
