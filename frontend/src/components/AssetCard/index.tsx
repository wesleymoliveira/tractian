import Heading from 'components/Heading'
import HealthLevelSlider from 'components/HealthLevelSlider'
import { useModal } from 'context/ModalContext'
import * as S from './styles'

export type AssetCardProps = {
  _id: string
  image: string
  name: string
  description: string
  assetModel: string
  responsable: string
  status: string
  healthLevel: number
}

const AssetCard = ({
  image,
  assetModel,
  description,
  healthLevel,
  name,
  responsable,
  status,
}: AssetCardProps) => {
  const { changeModalView } = useModal()
  return (
    <S.Wrapper>
      <S.titleWrapper>
        <Heading size="medium" color="black" lineLeft lineColor="primary">
          {name}
        </Heading>
      </S.titleWrapper>
      <S.ContentWrapper>
        <S.LeftBlock>
          <S.Image
            onClick={changeModalView}
            src={`http://localhost:3333/images/${image}`}
            alt={'Foto do Ativo'}
            role="img"
          />
        </S.LeftBlock>
        <S.RightBlock>
          <strong>Modelo:</strong>
          <span>{assetModel}</span>
          <strong>Descrição:</strong>
          <span>{description}</span>
          <strong>Responsável:</strong>
          <span>{responsable}</span>
          <strong>Status:</strong>
          <span>{status}</span>
          <strong>Saúde:</strong>
          <HealthLevelSlider
            disabled
            initialValue={healthLevel}
            value={healthLevel}
          />
        </S.RightBlock>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
export default AssetCard
