import React from 'react'

import { useModal } from '../../context/ModalContext'
import * as S from './styles'
import FormAddUnit from 'components/FormAddUnit'
import { FiPlus } from 'react-icons/fi'

const ModalAddUnit = () => {
  const { modalVisible } = useModal()
  return (
    <>
      <S.Wrapper isOpen={modalVisible}>
        <S.ModalWrapper>
          <S.TitleWrapper>
            <FiPlus size={24} />
            <h1> Adicionar nova Unidade</h1>
          </S.TitleWrapper>
          <FormAddUnit />
        </S.ModalWrapper>
      </S.Wrapper>
    </>
  )
}

export default ModalAddUnit
