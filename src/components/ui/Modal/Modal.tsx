'use client'

import { KeyboardEvent, ReactNode, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCashedProps } from '@/hooks/useCashedProps'
import { Dialog } from '../Dialog'
import { classNames } from '@/utils/classNames'
import { findFirstFocusableElement } from '@/utils/focus/findFirstFocusableElement'
import s from './modal.module.scss'

export interface ModalProps {
	visible?: boolean
	onClose?: () => void
	focusFirst?: boolean
	destroyOnClose?: boolean
	className?: string
	contentClassName?: string
	children?: ReactNode
	animationTime?: number
}

export const Modal = (props: ModalProps) => {
	const {
		children,
		visible,
		onClose,
		className,
		contentClassName,
		animationTime = 300,
		destroyOnClose,
	} = props

	const contentRef = useRef<HTMLDivElement>(null)
	const sentinelStartRef = useRef<HTMLDivElement>(null)
	const sentinelEndRef = useRef<HTMLDivElement>(null)
	const propsRef = useCashedProps(props)

	useEffect(() => {
		if (!contentRef.current || !sentinelStartRef.current || !sentinelEndRef.current) return
		const { focusFirst = true } = propsRef.current

		if (visible) {
			if (focusFirst) {
				const el = findFirstFocusableElement(contentRef.current, [
					sentinelStartRef.current,
					sentinelEndRef.current,
				])
				if (!el) {
					sentinelStartRef.current.focus()
				} else {
					el.focus()
				}
			} else {
				sentinelStartRef.current.focus()
			}
		}
	}, [propsRef, visible])

	const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Escape') {
			onClose?.()
		}

		if (e.code === 'Tab') {
			if (document.activeElement === sentinelEndRef.current) {
				sentinelStartRef.current?.focus()
			}
			if (e.shiftKey && document.activeElement === sentinelStartRef.current) {
				sentinelEndRef.current?.focus()
			}
		}
	}

	return (
		<Dialog
			className={className}
			visible={visible}
			animationTimeout={animationTime}
			lockScroll
			destroyOnClose={destroyOnClose}
		>
			<div
				data-testid='modal'
				className={classNames(s.modal, className)}
				onKeyDown={keyDownHandler}
			>
				<CSSTransition in={visible} timeout={animationTime} classNames='fade'>
					<div data-testid='modal-mask' className={s.mask} onClick={onClose} />
				</CSSTransition>

				<CSSTransition in={visible} timeout={300} classNames='fade-down' mountOnEnter>
					<div
						ref={contentRef}
						role='dialog'
						aria-modal='true'
						className={classNames(s.content, contentClassName)}
					>
						<span
							data-testid='sentialStart'
							className={s.sentinel}
							ref={sentinelStartRef}
							tabIndex={0}
							aria-hidden={true}
						/>
						{children}
						<span
							data-testid='sentialEnd'
							className={s.sentinel}
							ref={sentinelEndRef}
							tabIndex={0}
							aria-hidden={true}
						/>
					</div>
				</CSSTransition>
			</div>
		</Dialog>
	)
}
