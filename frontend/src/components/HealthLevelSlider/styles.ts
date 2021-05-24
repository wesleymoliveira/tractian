import styled, { css } from 'styled-components'
import { HealthLevelSliderProps } from '.'

export const InputWrapper = styled.div`
  ${() => css`
    display: flex;
    position: relative;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.lightGray};
    height: 15px;
    border-radius: 5px;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Value = styled.div`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.primary};
    font-weight: bold;
    margin-top: ${theme.spacings.small};
    left: 50%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

const WrapperModifiers = {
  disabled: () => css`
    ${Label}, ${Input} {
      cursor: default;
    }
  `,
}

export const Wrapper = styled.div<Pick<HealthLevelSliderProps, 'disabled'>>`
  ${({ disabled }) => css`
    ${disabled && WrapperModifiers.disabled()}
  `}
`
