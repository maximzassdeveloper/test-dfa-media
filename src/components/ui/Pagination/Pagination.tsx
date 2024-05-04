import { FC, useMemo } from 'react'
import { PaginationItem } from './PaginationItem'
import { classNames } from '@/utils/classNames'
import s from './pagination.module.scss'

interface PaginationProps {
  current: number
  last: number
  first?: number
  className?: string
  onClick?: (content: number) => void
}

// TODO: add prev,next buttons

const PLACEHOLDER_NUM = -0.345
const SIDE_COUNT = 3

export const Pagination: FC<PaginationProps> = (props) => {
  const { current, first = 1, last, className, onClick } = props

  const numbers = useMemo(() => {
    const left_count = current - first
    let left_count_nature = Math.min(left_count, SIDE_COUNT)

    const right_count = last - current
    let right_count_nature = Math.min(right_count, SIDE_COUNT)

    if (left_count_nature < SIDE_COUNT) {
      right_count_nature +=
        SIDE_COUNT - left_count_nature <= right_count - SIDE_COUNT
          ? SIDE_COUNT - left_count_nature
          : 0
    }

    if (right_count_nature < SIDE_COUNT) {
      left_count_nature +=
        SIDE_COUNT - right_count_nature <= left_count - SIDE_COUNT
          ? SIDE_COUNT - right_count_nature
          : 0
    }

    const result: number[] = []

    for (let i = 0; i < left_count_nature; i++) {
      result.unshift(current - i - 1)
    }
    result.push(current)
    for (let i = 0; i < right_count_nature; i++) {
      result.push(current + i + 1)
    }

    if (result[0] !== first) {
      result[0] = first
      result.splice(1, 0, PLACEHOLDER_NUM)
    }
    if (result[result.length - 1] !== last) {
      result[result.length - 1] = last
      result.splice(result.length - 1, 0, PLACEHOLDER_NUM)
    }

    return result
  }, [current, first, last])

  return (
    <ul className={classNames(s.pagination, className)}>
      {numbers.map((i, index) => (
        <PaginationItem
          key={i + index}
          isPlaceholder={i === PLACEHOLDER_NUM}
          active={i === current}
          onClick={onClick}
          content={i}
        />
      ))}
    </ul>
  )
}
