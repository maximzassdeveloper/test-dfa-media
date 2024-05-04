import { ChangeEvent, FC, useEffect } from 'react'
import { Checkbox, Spinner } from '@/components/ui'
import { useGetGenres } from '../../../hooks/useGetGenres'
import s from './GenresSelect.module.scss'

interface GenresCheckboxListProps {
  selectedGenreIds: number[]
  onChange: (genres: number[]) => void
}

const GenresCheckboxList: FC<GenresCheckboxListProps> = (props) => {
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

  useEffect(() => {
    console.log('mounted')
  }, [])

  return (
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
  )
}

export default GenresCheckboxList
