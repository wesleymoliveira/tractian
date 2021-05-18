import React from 'react'

import { useModal } from '../../context/ModalContext'
import * as S from './styles'
import FormAddUser from 'components/FormAddUser'
import { FiPlus } from 'react-icons/fi'

const ModalAddUser = () => {
  const { modalVisible } = useModal()
  return (
    <>
      <S.Wrapper isOpen={modalVisible}>
        <S.ModalWrapper>
          <S.TitleWrapper>
            <FiPlus size={24} />
            <h1> Adicionar novo Usuário</h1>
          </S.TitleWrapper>
          <FormAddUser />
        </S.ModalWrapper>
      </S.Wrapper>
    </>
  )
}

export default ModalAddUser
