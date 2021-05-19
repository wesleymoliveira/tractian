import Heading from 'components/Heading'
import * as S from './styles'

export type AssetCardProps = {
  image: string
  name: string
  description: string
  assetModel: string
  responsible: string
  status: string
  healthLevel: number
}

const AssetCard = ({
  image,
  assetModel,
  description,
  healthLevel,
  name,
  responsible,
  status,
}: AssetCardProps) => (
  <S.Wrapper>
    <S.titleWrapper>
      <Heading size="medium" color="black" lineLeft lineColor="primary">
        {name}
      </Heading>
    </S.titleWrapper>
    <S.ContentWrapper>
      <S.LeftBlock>
        <S.Image
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
        <span>{responsible}</span>
        <strong>Status:</strong>
        <span>{status}</span>
        <strong>Saúde:</strong>
        <span>{healthLevel}</span>
      </S.RightBlock>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default AssetCard
