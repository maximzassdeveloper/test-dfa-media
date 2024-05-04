import { FC } from 'react'
import { Select, SelectOption } from '@/components/ui'
import { MovieSortType } from '../../../model/movieTypes'

const sortOptions: SelectOption<MovieSortType>[] = [
  {
    label: 'По популярности',
    value: 'popularity.desc',
  },
  {
    label: 'По дате выпуска',
    value: 'primary_release_date.desc',
  },
  {
    label: 'По рейтингу',
    value: 'vote_average.desc',
  },
]

interface SortBySelectProps {
  sortValue?: MovieSortType
  onChange: (val: MovieSortType) => void
}

export const SortBySelect: FC<SortBySelectProps> = (props) => {
  const { sortValue, onChange } = props

  return (
    <Select<MovieSortType>
      options={sortOptions}
      label='Сортировать по'
      value={sortValue}
      onChange={onChange}
    />
  )
}
