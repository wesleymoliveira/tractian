import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    flex: 1;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.small};
    border: 0.1rem solid ${theme.colors.lightGray};
  `}
`

export const WrapperTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
