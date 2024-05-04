import { Option } from './Option'
import { SelectOption, Value } from './Select'
import s from './Select.module.scss'

interface SelectListProps<T extends Value> {
  options: SelectOption<T>[]
  selected?: T
  onSelect: (option: SelectOption<T>) => void
}

export const SelectList = <T extends Value = string>(props: SelectListProps<T>) => {
  const { options, selected, onSelect } = props

  return (
    <div className={s.list}>
      {options.map((option) => (
        <Option
          key={option.value}
          option={option}
          onSelect={onSelect}
          selected={selected === option.value}
        />
      ))}
    </div>
  )
}
