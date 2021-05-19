import { AccountCircle, Dashboard, List } from '@styled-icons/material-outlined'

import Link from 'next/link'
import * as S from './styles'

export type NavigatorProps = {
  activeLink?: '/units' | '/assets' | '/users' | string
}

const Navigator = ({ activeLink }: NavigatorProps) => {
  return (
    <S.Nav>
      <Link href="/units" passHref>
        <S.Link isActive={activeLink === '/units'} title="Unidades">
          <List size={24} />
          <span>Unidades</span>
        </S.Link>
      </Link>
      <Link href="/assets" passHref>
        <S.Link isActive={activeLink === '/assets'} title="Ativos">
          <Dashboard size={24} />
          <span>Ativos</span>
        </S.Link>
      </Link>
      <Link href="/users" passHref>
        <S.Link isActive={activeLink === '/users'} title="Usuários">
          <AccountCircle size={24} />
          <span>Usuários</span>
        </S.Link>
      </Link>
    </S.Nav>
  )
}

export default Navigator
