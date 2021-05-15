import Dropdown from 'components/Dropdown'
import * as S from './styles'
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import Link from 'next/link'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/users/profile" passHref>
        <S.WrapperLink>
          <AccountCircle />
          <span>Meu perfil</span>
        </S.WrapperLink>
      </Link>

      <S.WrapperLink
        role="button"
        onClick={() => console.log('teste')}
        title="Sign out"
      >
        <ExitToApp />
        <span>Sair</span>
      </S.WrapperLink>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
