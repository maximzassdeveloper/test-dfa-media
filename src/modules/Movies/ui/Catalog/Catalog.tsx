'use client'

import { FC, memo, useState } from 'react'
import { MovieList } from '../MovieList/MovieList'
import { Pagination } from '@/components/ui'
import { useDebounce } from '@/hooks/useDebounce'
import { useGetMovies } from '../../hooks/useGetMovies'
import { MovieFilters } from '../../model/movieTypes'
import { SortBySelect } from './SortBySelect/SortBySelect'
import { GenresSelect } from './GenresSelect/GenresSelect'
import s from './Catalog.module.scss'

export const Catalog: FC = memo(() => {
  const [filters, setFilters] = useState<MovieFilters>({})
  const debouncedFilters = useDebounce(filters, 300)

  const { data, isLoading } = useGetMovies(debouncedFilters)

  const changeFiltersHandler = (key: keyof MovieFilters, val: MovieFilters[keyof MovieFilters]) => {
    setFilters((prev) => ({ ...prev, [key]: val }))
  }

  return (
    <div>
      <div className={s.filters}>
        <SortBySelect
          sortValue={filters.sortBy}
          onChange={(v) => changeFiltersHandler('sortBy', v)}
        />
        <GenresSelect
          selectedGenreIds={filters.genres ?? []}
          onChange={(v) => changeFiltersHandler('genres', v)}
        />
      </div>

      <MovieList movies={data?.data.results ?? []} isLoading={isLoading} />

      <Pagination
        first={1}
        current={data?.data.page ?? filters.page ?? 1}
        /* АПИ и возвращает total_pages = 43952, 
				но при обращении к странице больше 500 выдает ошибку */
        last={Math.min(data?.data.total_pages ?? 500, 500)}
        onClick={(v) => changeFiltersHandler('page', v)}
      />
    </div>
  )
})
