import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'

import Base from 'pageTemplates/Base'
import { useModal } from 'context/ModalContext'
import { useState } from 'react'
import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar'
import * as S from './styles'
import AssetCardSlider from 'components/AssetCardSlider'
import { AssetCardProps } from 'components/AssetCard'
import Empty from 'components/Empty'
import TextField from 'components/TextField'
import { FiPlus, FiSearch } from 'react-icons/fi'
import Button from 'components/Button'
import ModalAddAsset from 'components/ModalAddAsset'

export type AssetsTemplateProps = {
  filterItems: ItemProps[]
  assets: AssetCardProps[]
  loading: boolean
}

const AssetsTemplate = ({
  filterItems,
  assets,
  loading,
}: AssetsTemplateProps) => {
  const { changeModalView } = useModal()
  const [searchValue, setSearchValue] = useState('')
  const { push } = useRouter()

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/assets',
      query: items,
    })
    return
  }
  const handleSearchInputChanges = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault()
    setSearchValue(e.currentTarget.value)
  }

  if (searchValue.length > 0) {
    assets = assets.filter((assetsfiltered) => {
      return assetsfiltered.name.toLowerCase().match(searchValue.toLowerCase())
    })
  }

  return (
    <Base>
      <S.Main>
        <ModalAddAsset />
        <ExploreSideBar onFilter={handleFilter} items={filterItems} />

        <section>
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
          {loading ? (
            <S.Loading src="/img/dots.svg" alt="Carregando ativos" />
          ) : assets?.length > 0 ? (
            <div>
              <AssetCardSlider assets={assets} />
            </div>
          ) : (
            <Empty
              title="Nenhum ativo encontrado!"
              description="Verifique a sua busca ou cadastre novos ativos."
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default AssetsTemplate
