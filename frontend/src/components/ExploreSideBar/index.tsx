import { useEffect, useState } from 'react'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'
import { Close, FilterList } from '@styled-icons/material-outlined'
import { ParsedUrlQueryInput } from 'querystring'

export type ItemProps = {
  title: string
  name: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

export type ExploreSideBarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSideBar = ({
  items,
  onFilter,
  initialValues = {},
}: ExploreSideBarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onFilter(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleRadio = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleFilterMenu = () => {
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="abrir filtro" onClick={() => setIsOpen(true)} />
        <Close aria-label="fechar filtro" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading
              lineBottom
              lineColor="secondary"
              color="black"
              size="small"
            >
              {item.title}
            </Heading>

            {item.fields.map((field) => (
              <Radio
                key={field.name}
                id={field.name}
                value={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={
                  String(field.name) === String(values[item.name])
                }
                onChange={() => handleRadio(item.name, field.name)}
              />
            ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button onClick={handleFilterMenu} fullWidth size="medium">
          Filtrar
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSideBar
