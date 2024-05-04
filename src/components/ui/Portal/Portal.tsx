'use client'

import { FC, ReactNode, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useCashedProps } from '@/hooks/useCashedProps'
import { getScrollbarWidth } from '@/utils/getScrollbarWidth'

export interface PortalProps {
  visible?: boolean
  /** Delay before removing Portal, for your animations */
  animationTimeout?: number
  /** Lock page scroll on visible */
  lockScroll?: boolean
  destroyOnClose?: boolean
  className?: string
  dataTestId?: string
  children: ReactNode
}

const createEl = () => {
  if (typeof document !== undefined) {
    return document?.createElement('div')
  }
  return null
}

export const Portal: FC<PortalProps> = (props) => {
  const { children, visible, className } = props

  const containerRef = useRef<HTMLDivElement | null>(null)
  const delayRef = useRef<NodeJS.Timeout>()
  const propsRef = useCashedProps(props)

  const removeContainer = useCallback(
    (force?: boolean) => {
      if (!containerRef.current) return

      if (propsRef.current.lockScroll) {
        document.body.style.overflow = 'auto'
        document.body.style.width = ''
      }

      if (propsRef.current.destroyOnClose || force) {
        containerRef.current.remove()
      } else {
        containerRef.current.style.display = 'none'
      }
    },
    [propsRef]
  )

  useEffect(() => {
    containerRef.current = createEl()
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const { animationTimeout, lockScroll, destroyOnClose, dataTestId } = propsRef.current
    const container = containerRef.current
    clearTimeout(delayRef.current)

    if (visible) {
      if (dataTestId) {
        container.setAttribute('data-testid', dataTestId)
      }

      document.body.appendChild(container)
      if (lockScroll) {
        const scrollBarWidth = getScrollbarWidth()
        document.body.style.overflow = 'hidden'
        document.body.style.width = `calc(100% - ${scrollBarWidth}px)`
      }

      if (!destroyOnClose) {
        containerRef.current.style.display = 'block'
      }
    } else {
      if (animationTimeout !== undefined) {
        delayRef.current = setTimeout(() => {
          removeContainer()
        }, animationTimeout)
      } else {
        removeContainer()
      }
    }
  }, [propsRef, visible, removeContainer])

  useEffect(() => {
    if (className && containerRef.current) {
      containerRef.current.className = className
    }
  }, [className])

  // Remove div container when Portal unmount
  useEffect(() => {
    return () => {
      removeContainer(true)
      clearTimeout(delayRef.current)
    }
    // eslint-disable-next-line
  }, [])

  if (!containerRef.current) {
    return null
  }

  return createPortal(children, containerRef.current)
}
