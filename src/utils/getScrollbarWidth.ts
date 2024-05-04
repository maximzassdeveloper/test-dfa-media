function getDefaultScrollbarWidth() {
  if (typeof document === undefined) return 0

  const outer = document.createElement('div')
  outer.style.pointerEvents = 'none'
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'
  document.body.appendChild(outer)

  const inner = document.createElement('div')
  outer.appendChild(inner)

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  outer.parentNode?.removeChild(outer)

  return scrollbarWidth
}

export function getScrollbarWidth() {
  const { width } = getComputedStyle(document.body, '::-webkit-scrollbar')
  const match = width.match(/^(.*)px$/)
  const value = Number(match?.[1])

  return Number.isNaN(value) ? getDefaultScrollbarWidth() : value
}
