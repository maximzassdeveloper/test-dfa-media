import { useQuery } from '@tanstack/react-query'
import { GetMoviesNowPlayingResponse, getMoviesNowPlaying } from '../api/MoviesApi'
import { UseQueryOptionsDto } from '@/libs/reactQuery'

const GET_MOVIES_NOW_PLAYING_QUERY_KEY = 'movies/playing_now'

export function useGetMoviesNowPlaying(options?: UseQueryOptionsDto<GetMoviesNowPlayingResponse>) {
  return useQuery({
    queryKey: [GET_MOVIES_NOW_PLAYING_QUERY_KEY],
    queryFn: getMoviesNowPlaying,
    ...options,
  })
}
