import { FC } from 'react'
import { classNames } from '@/utils/classNames'
import s from './pagination.module.scss'

interface PaginationItemProps {
  content: number
  active?: boolean
  isPlaceholder?: boolean
  onClick?: (num: number) => void
}

export const PaginationItem: FC<PaginationItemProps> = (props) => {
  const { content, active, isPlaceholder, onClick } = props

  const clickHandler = () => {
    if (isPlaceholder) return
    onClick?.(content)
  }

  return (
    <li className={classNames(s.item, { [s.active]: active, [s.placeholder]: isPlaceholder })}>
      <span tabIndex={0} onClick={clickHandler}>
        {isPlaceholder ? '...' : content}
      </span>
    </li>
  )
}
