import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 23rem;
  `,
  big: () => css`
    width: 50rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    width: 23rem;

    svg {
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
