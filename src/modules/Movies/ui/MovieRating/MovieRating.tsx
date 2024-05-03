import { FC } from 'react'
import { classNames } from '@/utils/classNames'
import s from './MovieRating.module.scss'

interface MovieRatingProps {
	rating: number
	className?: string
	size?: 'small'
}

export const MovieRating: FC<MovieRatingProps> = (props) => {
	const { rating, className, size } = props

	const color = () => {
		if (rating >= 7 && rating <= 10) {
			return 'green'
		} else if (rating >= 4 && rating <= 6) {
			return 'grey'
		} else {
			return 'red'
		}
	}

	const classes = classNames(s.rating, s[color()], className, { [s.small]: size === 'small' })

	return <span className={classes}>{rating}</span>
}
