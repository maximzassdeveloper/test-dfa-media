import { useCallback, useEffect } from 'react'

interface UseClickOutsideProps {
	targets: (HTMLElement | null | undefined)[]
	outsideCallback?: () => void
	// The condition by which the click event is added
	visible?: boolean
}

export const useClickOutside = (props: UseClickOutsideProps) => {
	const { targets, outsideCallback, visible } = props

	const clickOutside = useCallback(
		(e: MouseEvent) => {
			let isOutside = true
			targets.forEach((target) => {
				if (!target || !e.target) return

				if (target.contains(e.target as Node)) {
					isOutside = false
				}
			})

			if (isOutside) {
				outsideCallback?.()
			}
		},
		[targets, outsideCallback]
	)

	useEffect(() => {
		if (visible) {
			window.addEventListener('click', clickOutside)
		}
		return () => {
			window.removeEventListener('click', clickOutside)
		}
	}, [visible, clickOutside])
}
