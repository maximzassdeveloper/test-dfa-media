import { forwardRef, InputHTMLAttributes, memo } from 'react'
import { classNames } from '@/utils/classNames'
import s from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	error?: boolean | string
	label?: string
}

export const Input = memo(
	forwardRef<HTMLInputElement, InputProps>((props, ref) => {
		const { className, id, autoComplete = 'off', error, readOnly, label, ...rest } = props

		const classes = classNames(s.input, className, {
			[s.errored]: !!error,
			[s.readonly]: readOnly,
		})

		return (
			<div className={classes}>
				{!!label && (
					<label htmlFor={id} className={s.label}>
						{label}
					</label>
				)}
				<input ref={ref} id={id} autoComplete={autoComplete} readOnly={readOnly} {...rest} />
				{typeof error === 'string' && <span className={s.error}>{error}</span>}
			</div>
		)
	})
)
