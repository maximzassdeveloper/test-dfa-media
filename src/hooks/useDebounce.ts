import { useEffect, useRef, useState } from 'react'

export const useDebounce = <T>(value: T, ms: number) => {
  const [result, setResult] = useState(value)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setResult(value)
    }, ms)

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [value, ms])

  return result
}
