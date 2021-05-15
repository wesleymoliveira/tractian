import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 23rem;
    height: 7rem;
  `,
  big: () => css`
    width: 50rem;
    height: 14rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    width: 5.8rem;
    height: 4.5rem;

    svg {
      height: 4.5rem;
      pointer-events: none;
    }

    .hide {
      display: none;
    }
  `}
  `,
}
export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, hideOnMobile, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
