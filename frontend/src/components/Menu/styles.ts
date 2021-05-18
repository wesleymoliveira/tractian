import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    background: ${theme.colors.dark};
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    margin-right: ${theme.spacings.xsmall};
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
type MenuFullProps = {
  isOpen: boolean
}

export const MenuNav = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    color: ${theme.colors.white};
    flex-direction: column;
    justify-content: space-between;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    background: ${theme.colors.dark};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity ${theme.transition.default};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      width: 4rem;
      height: 4rem;
      margin: ${theme.spacings.xsmall};
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'TranslateY(0)' : 'TranslateY(3rem)'};
      transition: transform ${theme.transition.default};
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'TranslateY(0)' : 'TranslateY(3rem)'};
      transition: transform ${theme.transition.default};
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
