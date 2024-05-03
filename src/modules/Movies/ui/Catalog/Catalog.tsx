'use client'

import { FC, useState } from 'react'
import { MovieList } from '../MovieList/MovieList'
import { useGetMovies } from '../../hooks/useGetMovies'
import { Select } from '@/components/ui'
import { MovieFilters, MovieSortType } from '../../model/movieTypes'
import { SelectOption } from '@/components/ui/Select/Select'

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

export const Catalog: FC = () => {
	const [filters, setFilters] = useState({} as MovieFilters)
	const { data, isLoading } = useGetMovies(filters)

	console.log(filters)

	return (
		<div>
			<div>
				<Select<MovieSortType>
					options={sortOptions}
					value={filters['sortBy']}
					onChange={(val) => setFilters((prev) => ({ ...prev, sortBy: val }))}
				/>
			</div>
			<MovieList movies={data?.data.results ?? []} isLoading={isLoading} />
		</div>
	)
}
