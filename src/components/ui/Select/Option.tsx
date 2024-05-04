import { classNames } from '@/utils/classNames'
import { Value, SelectOption } from './Select'
import s from './Select.module.scss'

interface OptionProps<T extends Value = string> {
  option: SelectOption<T>
  selected: boolean
  onSelect: (option: SelectOption<T>) => void
}

export const Option = <T extends Value = string>(props: OptionProps<T>) => {
  const { option, selected, onSelect } = props

  const clickHandler = () => {
    if (option.disabled) return

    onSelect(option)
  }

  return (
    <span
      data-testid='select-option'
      onClick={clickHandler}
      className={classNames(s.option, { [s.selected]: selected, [s.disabled]: option.disabled })}
    >
      {option.label}
    </span>
  )
}
