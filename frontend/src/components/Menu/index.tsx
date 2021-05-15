import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string | null
}

const Menu = ({ username = '' }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <S.Wrapper>
        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>
        <S.LogoWrapper>
          <Logo hideOnMobile />
        </S.LogoWrapper>

        <MediaMatch greaterThan="medium">
          <S.MenuNav>
            <Link href="/" passHref>
              <S.MenuLink>Minha empresa</S.MenuLink>
            </Link>
            <Link href="/units" passHref>
              <S.MenuLink>Unidades</S.MenuLink>
            </Link>
            <Link href="/users" passHref>
              <S.MenuLink>Usuários</S.MenuLink>
            </Link>
          </S.MenuNav>
        </MediaMatch>
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="Search" />
            </S.IconWrapper>

            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/sign-in" passHref>
                  <Button as="a">Login</Button>
                </Link>
              ) : (
                <span>{username}</span>
              )}
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />
            <S.MenuNav>
              <Link href="/" passHref>
                <S.MenuLink>Minha empresa</S.MenuLink>
              </Link>
              <Link href="/units" passHref>
                <S.MenuLink>Unidades</S.MenuLink>
              </Link>
              <Link href="/users" passHref>
                <S.MenuLink>Usuários</S.MenuLink>
              </Link>

              {!!username && (
                <>
                  <Link href="/users/me" passHref>
                    <S.MenuLink>Meu perfil</S.MenuLink>
                  </Link>
                </>
              )}
            </S.MenuNav>

            {!username && (
              <S.RegisterBox>
                <Link href="/sign-in" passHref>
                  <Button as="a" fullWidth size="large">
                    Login
                  </Button>
                </Link>
                <span>ou</span>
                <Link href="/sign-up">
                  <S.CreateAccount>Registre-se agora</S.CreateAccount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      </S.Wrapper>
    </>
  )
}

export default Menu
