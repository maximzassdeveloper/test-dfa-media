import { ChangeEvent, FC } from 'react'
import { Button, Checkbox, Popover, Spinner } from '@/components/ui'
import { useGetGenres } from '../../../hooks/useGetGenres'
import s from './GenresSelect.module.scss'

interface GenresSelectProps {
  selectedGenreIds: number[]
  onChange: (genres: number[]) => void
}

export const GenresSelect: FC<GenresSelectProps> = (props) => {
  const { selectedGenreIds, onChange } = props
  const { data, isLoading } = useGetGenres()

  const changeGenreHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const genreId = +e.target.value
    const checked = e.target.checked

    let newGenres: number[] = []
    if (checked && !selectedGenreIds.includes(genreId)) {
      newGenres = [...selectedGenreIds, genreId]
    }

    if (!checked) {
      newGenres = selectedGenreIds.filter((g) => g !== genreId)
    }

    onChange(newGenres)
  }

  return (
    <Popover
      content={
        <div className={s.genres}>
          {isLoading ? (
            <Spinner />
          ) : (
            data?.data.genres.map((genre) => (
              <Checkbox
                name='genre'
                key={genre.id}
                value={genre.id}
                label={genre.name}
                checked={selectedGenreIds.includes(genre.id)}
                onChange={changeGenreHandler}
              />
            ))
          )}
        </div>
      }
    >
      <Button theme='secondary'>Выбрать жанры</Button>
    </Popover>
  )
}
