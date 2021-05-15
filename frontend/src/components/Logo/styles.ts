import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
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
  ${({ theme, color, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
