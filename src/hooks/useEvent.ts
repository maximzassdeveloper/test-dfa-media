import { useCallback } from 'react'
import { useCashedProps } from './useCashedProps'

export const useEvent = <T extends (...args: any[]) => any>(callback: T) => {
	const cashedCallback = useCashedProps(callback)

	const resultCallback = useCallback(
		(...args: Parameters<T>) => {
			cashedCallback.current.apply(null, args)
		},
		[cashedCallback]
	)

	return resultCallback
}
