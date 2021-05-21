import { useState } from 'react'
import Link from 'next/link'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import CompanyDropdown from 'components/CompanyDropdown'

import { ExitToApp } from '@styled-icons/material-outlined'
import { signOut } from 'next-auth/client'

import Notifications from 'components/Notifications'

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
              <S.MenuLink>Home</S.MenuLink>
            </Link>
          </S.MenuNav>
        </MediaMatch>
        <>
          <S.MenuGroup>
            <Notifications />
            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/login" passHref>
                  <Button as="a">Login</Button>
                </Link>
              ) : (
                <>
                  <CompanyDropdown companyName={username} />
                </>
              )}
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />
            <S.MenuNav>
              {!!username && (
                <>
                  <Link href="/company/" passHref>
                    <S.MenuLink>Minha empresa</S.MenuLink>
                  </Link>
                </>
              )}
              <S.MenuLink onClick={() => signOut()}>
                <ExitToApp />
                Sair
              </S.MenuLink>
            </S.MenuNav>

            {!username && (
              <S.RegisterBox>
                <Link href="/login" passHref>
                  <Button as="a" fullWidth size="large">
                    Login
                  </Button>
                </Link>
                <span>ou</span>
                <Link href="/register">
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
