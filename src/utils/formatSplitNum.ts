export function formatSplitNum(num: number) {
  const str = String(num)
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    if ((str.length - i) % 3 === 0) {
      result = ' ' + str[i] + result
    } else {
      result = str[i] + result
    }
  }

  return result.trim()
}
