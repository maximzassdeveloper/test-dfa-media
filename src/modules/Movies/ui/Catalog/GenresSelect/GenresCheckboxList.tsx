import { ChangeEvent, FC } from 'react'
import { Checkbox, Spinner } from '@/components/ui'
import { useGetGenres } from '../../../hooks/useGetGenres'

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

  return isLoading ? (
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
  )
}

export default GenresCheckboxList
