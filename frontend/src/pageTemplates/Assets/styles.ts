import styled, { css } from 'styled-components'
import { Container } from 'components/Container'
import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const PageWrapper = styled.div`
  display: flex;
`
export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 40rem 1fr;
    gap: ${theme.spacings.xxsmall};
  `}
  `}
`

export const Loading = styled.img`
  width: 50rem;
`

export const WrapperSearch = styled.div`
  ${TextFieldStyles.InputWrapper} {
    display: flex;
    min-width: 35rem;
  }
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const WrapperButton = styled.div`
  ${ButtonStyles.Wrapper} {
    margin-left: 2rem;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
