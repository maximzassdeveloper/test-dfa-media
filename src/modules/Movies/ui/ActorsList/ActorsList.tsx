import { FC, memo } from 'react'
import { useGetActors } from '../../hooks/useGetActors'
import { ActorItem } from '../ActorItem/ActorItem'
import { Spinner } from '@/components/ui'
import s from './ActorsList.module.scss'

interface ActorsListProps {
  movieId: number
}

export const ActorsList: FC<ActorsListProps> = memo((props) => {
  const { movieId } = props

  const { data, isLoading } = useGetActors(movieId)
  const actors = (data?.data.cast ?? []).slice(0, 5)

  return (
    <div className={s.actors}>
      {isLoading ? <Spinner /> : actors.map((actor) => <ActorItem key={actor.id} actor={actor} />)}
    </div>
  )
})
