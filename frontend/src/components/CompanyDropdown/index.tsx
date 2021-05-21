import Dropdown from 'components/Dropdown'
import * as S from './styles'
import { signOut } from 'next-auth/client'
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import Link from 'next/link'

export type CompanyDropdownProps = {
  companyName: string
}

const CompanyDropdown = ({ companyName }: CompanyDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Companyname>{companyName.toUpperCase()}</S.Companyname>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/mycompany" passHref>
        <S.WrapperLink>
          <AccountCircle />
          <span>Meu perfil</span>
        </S.WrapperLink>
      </Link>

      <S.WrapperLink role="button" onClick={() => signOut()} title="Sair">
        <ExitToApp />
        <span>Sair</span>
      </S.WrapperLink>
    </S.Nav>
  </Dropdown>
)

export default CompanyDropdown
