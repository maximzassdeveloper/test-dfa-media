'use client'

import { ChangeEvent, FC, useRef, useState } from 'react'
import { useSearchMovies } from '../../hooks/useSearchMovies'
import { Input, Popover } from '@/components/ui'
import { SearchList } from './SearchList'
import s from './SearchMovies.module.scss'

export const SearchMovies: FC = () => {
	const [searchValue, setSearchValue] = useState('')
	const [isFocused, setIsFocused] = useState(false)
	const firstRender = useRef(true)

	const { data, isFetching } = useSearchMovies(searchValue, { enabled: isFocused })

	const openList = () => {
		if (firstRender.current) return
		setIsFocused(true)
	}

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (firstRender.current) {
			firstRender.current = false
			openList()
		}
		setSearchValue(e.target.value)
	}

	return (
		<Popover
			visible={isFocused}
			onVisibleChange={setIsFocused}
			trigger={[]}
			autoWidth
			offset={10}
			className={s.content}
			content={<SearchList movies={data?.data.results ?? []} isLoading={isFetching} />}
		>
			<div className={s.search} onClick={openList}>
				<Input
					value={searchValue}
					placeholder='Поиск'
					onChange={inputChangeHandler}
					onFocus={openList}
				/>
			</div>
		</Popover>
	)
}
