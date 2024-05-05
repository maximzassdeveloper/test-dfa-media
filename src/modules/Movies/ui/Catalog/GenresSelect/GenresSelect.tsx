import { FC, Suspense, lazy, useState } from 'react'
import { Button, Popover, Spinner } from '@/components/ui'
const GenresCheckboxList = lazy(() => import('./GenresCheckboxList'))
import s from './GenresSelect.module.scss'

interface GenresSelectProps {
  selectedGenreIds: number[]
  onChange: (genres: number[]) => void
}

export const GenresSelect: FC<GenresSelectProps> = (props) => {
  const { selectedGenreIds, onChange } = props
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Popover
      visible={isVisible}
      onVisibleChange={setIsVisible}
      mountOnEnter
      className={s.genres}
      content={
        <Suspense fallback={<Spinner />}>
          <GenresCheckboxList selectedGenreIds={selectedGenreIds} onChange={onChange} />
        </Suspense>
      }
    >
      <Button theme='secondary'>Выбрать жанры</Button>
    </Popover>
  )
}
