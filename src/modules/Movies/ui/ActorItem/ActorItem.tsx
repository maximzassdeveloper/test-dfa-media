import { FC } from 'react'
import Image from 'next/image'
import { imgPath } from '@/utils/imgPath'
import { classNames } from '@/utils/classNames'
import { Actor } from '../../model/movieTypes'
import s from './ActorItem.module.scss'

interface ActorItemProps {
  actor: Actor
  className?: string
}

export const ActorItem: FC<ActorItemProps> = (props) => {
  const { actor, className } = props
  const { name, character, profile_path } = actor

  return (
    <div className={classNames(s.actor, className)}>
      <Image
        className={s.avatar}
        src={imgPath(profile_path, 200)}
        alt={name}
        width={73}
        height={83}
      />

      <span className={s.name}>{name}</span>
      <span className={s.character}>{character}</span>
    </div>
  )
}
