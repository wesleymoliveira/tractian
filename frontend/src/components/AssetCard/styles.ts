import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    border: 0.1rem solid ${theme.colors.lightGray};
    min-height: 40rem;
    max-width: 80rem;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  `}
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
`

export const titleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
  `}
`

export const LeftBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    min-width: 30rem;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
  `}
`

export const RightBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.dark};
    padding: ${theme.spacings.xsmall};
  `}
`

export const PropsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`
