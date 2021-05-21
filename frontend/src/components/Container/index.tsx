import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: ${theme.spacings.xxsmall};
    margin-right: ${theme.spacings.xxsmall};
  `}
`
