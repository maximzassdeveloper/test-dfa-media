import { FC, lazy } from 'react'
import { Button, Popover } from '@/components/ui'
// import { GenresCheckboxList } from './GenresCheckboxList'
const GenresCheckboxList = lazy(() => import('./GenresCheckboxList'))

interface GenresSelectProps {
  selectedGenreIds: number[]
  onChange: (genres: number[]) => void
}

export const GenresSelect: FC<GenresSelectProps> = (props) => {
  const { selectedGenreIds, onChange } = props

  return (
    <Popover
      content={<GenresCheckboxList selectedGenreIds={selectedGenreIds} onChange={onChange} />}
    >
      <Button theme='secondary'>Выбрать жанры</Button>
    </Popover>
  )
}
