import React, { useState } from 'react'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import { FiSearch, FiPlus } from 'react-icons/fi'

import * as S from './styles'

import UnitCard from 'components/UnitCard'
import Empty from 'components/Empty'
import { useModal } from 'context/ModalContext'
import ModalAddUnit from 'components/ModalAddUnit'
import Base from '../Base'

export type UnitProps = {
  _id: string
  name: string
}

export type UnitsTemplateProps = { units: UnitProps[] }

const Units = ({ units }: UnitsTemplateProps) => {
  const { changeModalView } = useModal()
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChanges = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault()
    setSearchValue(e.currentTarget.value)
  }

  if (searchValue.length > 0) {
    units = units.filter((unitsfiltered) => {
      return unitsfiltered.name.toLowerCase().match(searchValue.toLowerCase())
    })
  }

  return (
    <Base>
      <S.Wrapper>
        <ModalAddUnit />
        <S.WrapperHeading>
          <Heading size="huge" color="black" lineLeft lineColor="primary">
            Unidades
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

        {units?.length ? (
          <>
            {units.map((unit) => (
              <UnitCard key={unit._id} _id={unit._id} name={unit.name} />
            ))}
          </>
        ) : (
          <Empty
            title="Nenhuma unidade encontrada!"
            description="Verifique a sua busca ou cadastre novas unidades."
          />
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Units
