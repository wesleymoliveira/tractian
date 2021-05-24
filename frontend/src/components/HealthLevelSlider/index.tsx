import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type HealthLevelSliderProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: number
  disabled?: boolean
  min?: number
  max?: number
} & InputHTMLAttributes<HTMLInputElement>

const HealthLevelSlider = ({
  label,
  initialValue = 50,
  name,
  disabled = false,
  onInputChange,
  min = 0,
  max = 100,
  ...props
}: HealthLevelSliderProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(parseInt(newValue))

    !!onInputChange && onInputChange(newValue)
  }
  return (
    <>
      <S.Wrapper disabled={disabled}>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.InputWrapper>
          <S.Input
            type="range"
            onChange={onChange}
            defaultValue={value}
            disabled={disabled}
            name={name}
            min={min}
            max={max}
            {...(label ? { id: name } : {})}
            {...props}
          />
          <S.Value>
            <span>{value}%</span>
          </S.Value>
        </S.InputWrapper>
      </S.Wrapper>
    </>
  )
}

export default HealthLevelSlider
