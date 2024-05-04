import { useEffect, useRef } from 'react'

export function useCashedProps<T extends Record<string, any>>(props: T) {
  const propsRef = useRef<T>(props)

  useEffect(() => {
    propsRef.current = props
  }, [props])

  return propsRef
}
