import { FC } from 'react'
import { classNames } from '@/utils/classNames'
import { formatSplitNum } from '@/utils/formatSplitNum'
import s from './MovieRating.module.scss'

interface MovieRatingProps {
  rating: number
  viewsCount?: number
  className?: string
  size?: 'small'
}

export const MovieRating: FC<MovieRatingProps> = (props) => {
  const { rating, className, viewsCount, size } = props

  const color = () => {
    if (rating >= 7 && rating <= 10) {
      return 'green'
    } else if (rating >= 4 && rating <= 6) {
      return 'grey'
    } else {
      return 'red'
    }
  }

  const score = Math.trunc(rating * 10) / 10

  const classes = classNames(s.rating, className, { [s.small]: size === 'small' })
  const scoreClasses = classNames(s.score, s[color()])

  return (
    <span className={classes}>
      <span className={scoreClasses}>{score}</span>

      {viewsCount !== undefined && (
        <span className={s.views}>{formatSplitNum(viewsCount)} оценок</span>
      )}
    </span>
  )
}
