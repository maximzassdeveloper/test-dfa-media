'use client'

import { FC, HTMLAttributes, ReactElement, ReactNode, useCallback, useMemo } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useMergeState } from '@/hooks/useMergeState'
import { Align, Dialog, Placement } from '../Dialog'

type VisibleTrigger = 'click' | 'hover' | 'focus'

interface PopoverProps {
  content?: ReactNode
  className?: string
  visible?: boolean
  trigger?: VisibleTrigger | VisibleTrigger[]
  mountOnEnter?: boolean
  // Pick width of target element
  autoWidth?: boolean
  onVisibleChange?: (visible: boolean) => void
  children: ReactElement
  placement?: Placement[] | Placement
  align?: Align
  offset?: number
  boundary?: number
}

export const Popover: FC<PopoverProps> = (props) => {
  const {
    children,
    content,
    trigger = ['click'],
    visible: outVisible,
    onVisibleChange,
    mountOnEnter,
    className,
    autoWidth,
    placement,
    align,
    offset,
    boundary,
  } = props

  const [visible, setVisible] = useMergeState(outVisible, {
    defaultValue: false,
    onChange: onVisibleChange,
  })

  const togglePopover = useCallback(() => {
    setVisible((prev) => !prev)
  }, [setVisible])

  const openPopover = useCallback(() => {
    setVisible(true)
  }, [setVisible])

  const closePopover = useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const triggerProps = useMemo(() => {
    const triggerList = Array.isArray(trigger) ? trigger : [trigger]
    const result: HTMLAttributes<HTMLElement> = {}

    triggerList.forEach((triggerItem) => {
      if (triggerItem === 'click') {
        result.onClick = togglePopover
      } else if (triggerItem === 'hover') {
        result.onMouseEnter = openPopover
        result.onMouseLeave = closePopover
      } else if (triggerItem === 'focus') {
        result.onFocus = openPopover
        result.onBlur = closePopover
      }
    })

    return result
  }, [trigger, togglePopover, openPopover, closePopover])

  return (
    <Dialog
      trigger={children}
      visible={visible}
      triggerProps={triggerProps}
      animationTimeout={200}
      autoWidth={autoWidth}
      onClose={closePopover}
      placement={placement}
      align={align}
      offset={offset}
      boundary={boundary}
    >
      <CSSTransition in={visible} timeout={300} classNames='fade-down' mountOnEnter={mountOnEnter}>
        <div className={className}>{content}</div>
      </CSSTransition>
    </Dialog>
  )
}
