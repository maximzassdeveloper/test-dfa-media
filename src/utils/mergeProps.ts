import { classNames } from './classNames'

type Props = Record<string, any> | undefined

export function mergeProps(...args: Props[]) {
  const result: Props = { ...args[0] }

  for (let i = 1; i < args.length; i++) {
    const props = args[i]
    if (!props) continue

    for (const key in props) {
      if (!props.hasOwnProperty(key)) continue
      const val = props[key]
      const resultVal = result[key]

      // Combine classNames
      if (/className$/i.test(key) && typeof val === 'string' && typeof resultVal === 'string') {
        result[key] = classNames(resultVal, val)

        // Combine events
      } else if (
        key.startsWith('on') &&
        typeof val === 'function' &&
        typeof resultVal === 'function'
      ) {
        result[key] = (...args: any) => {
          resultVal(...args)
          val(...args)
        }
      } else {
        result[key] = val !== undefined ? val : resultVal
      }
    }
  }

  return result
}
