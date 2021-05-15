import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined'

import Link from 'next/link'
import * as S from './styles'

export type NavigatorProps = {
  activeLink?: '/companies' | '/units' | '/assets' | string
}

const Navigator = ({ activeLink }: NavigatorProps) => {
  return (
    <S.Nav>
      <Link href="/companies" passHref>
        <S.Link isActive={activeLink === 'companies'} title="Empresas">
          <AccountCircle size={24} />
          <span>Empresas</span>
        </S.Link>
      </Link>

      <Link href="units" passHref>
        <S.Link isActive={activeLink === 'units'} title="Unidades">
          <FormatListBulleted size={24} />
          <span>Unidades</span>
        </S.Link>
      </Link>

      <Link href="/assets" passHref>
        <S.Link isActive={activeLink === '/assets'} title="Ativos">
          <AccountCircle size={24} />
          <span>Ativos</span>
        </S.Link>
      </Link>
      <S.Link
        role="button"
        onClick={() => console.log('Teste')}
        title="Sign Out"
      >
        <ExitToApp size={24} />
        <span>Sair</span>
      </S.Link>
    </S.Nav>
  )
}

export default Navigator
