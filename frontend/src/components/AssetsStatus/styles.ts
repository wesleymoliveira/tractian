import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.lightGray};
    max-width: 60rem;
  `}
`
