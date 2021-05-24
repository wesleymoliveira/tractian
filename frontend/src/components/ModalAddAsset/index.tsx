import React from 'react'

import { useModal } from '../../context/ModalContext'
import * as S from './styles'
import FormAddAsset from 'components/FormAddAsset'
import { FiPlus } from 'react-icons/fi'

const ModalAddAsset = () => {
  const { modalVisible } = useModal()
  return (
    <>
      <S.Wrapper isOpen={modalVisible}>
        <S.ModalWrapper>
          <S.TitleWrapper>
            <FiPlus size={24} />
            <h1> Adicionar Ativo</h1>
          </S.TitleWrapper>
          <FormAddAsset />
        </S.ModalWrapper>
      </S.Wrapper>
    </>
  )
}

export default ModalAddAsset
