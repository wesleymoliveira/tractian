import React, { useState } from 'react'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import { FiSearch, FiPlus } from 'react-icons/fi'

import * as S from './styles'

import UserCard from 'components/UserCard'
import Empty from 'components/Empty'
import { useModal } from 'context/ModalContext'
import ModalAddUser from 'components/ModalAddUser'
import Base from '../Base'

export type UserProps = {
  _id: string
  name: string
}

export type UsersTemplateProps = { users: UserProps[] }

const Users = ({ users }: UsersTemplateProps) => {
  const { modalVisible, changeModalView } = useModal()
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChanges = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault()
    setSearchValue(e.currentTarget.value)
  }

  if (searchValue.length > 0) {
    users = users.filter((usersfiltered) => {
      return usersfiltered.name.toLowerCase().match(searchValue.toLowerCase())
    })
  }

  return (
    <Base>
      <S.Wrapper>
        <ModalAddUser />
        <S.WrapperHeading>
          <Heading size="huge" color="black" lineLeft lineColor="primary">
            Usuários
          </Heading>
          <S.WrapperSearch>
            <TextField
              placeholder={'Buscar'}
              name="search"
              icon={<FiSearch size={45} />}
              value={searchValue}
              onChange={handleSearchInputChanges}
            ></TextField>
            <S.WrapperButton>
              <Button icon={<FiPlus size={45} />} onClick={changeModalView}>
                Adicionar
              </Button>
            </S.WrapperButton>
          </S.WrapperSearch>
        </S.WrapperHeading>

        {users?.length ? (
          <>
            {users.map((user) => (
              <UserCard key={user._id} _id={user._id} name={user.name} />
            ))}
          </>
        ) : (
          <Empty
            title="Nenhum usuário encontrado!"
            description="Verifique a sua busca ou cadastre novos usuários."
          />
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Users
