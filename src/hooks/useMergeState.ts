import { Dispatch, SetStateAction, useState } from 'react'
import { useEvent } from './useEvent'

interface UseMergeStateOptions<T> {
  defaultValue?: T
  onChange?: (val: T) => void
}

export const useMergeState = <T>(outState: T | undefined, options?: UseMergeStateOptions<T>) => {
  const [innerState, setInnerState] = useState(options?.defaultValue)

  const state = outState === undefined ? innerState : outState

  const setState = useEvent((value: SetStateAction<T>) => {
    if (value instanceof Function) {
      options?.onChange?.(value(state as T))
    } else {
      options?.onChange?.(value)
    }

    if (outState === undefined) {
      setInnerState(value as T)
    }
  })

  return [state, setState] as [T, Dispatch<SetStateAction<T>>]
}
