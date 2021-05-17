import Heading from 'components/Heading'
import * as S from './styles'

type Props = {
  image: string
  name: string
  description: string
  assetModel: string
  responsible: string
  status: string
  healthLevel: number
}
export type AssetCardProps = {
  asset: Props
}

const AssetCard = ({ asset }: AssetCardProps) => (
  <S.Wrapper>
    <S.titleWrapper>
      <Heading size="medium" color="black" lineLeft lineColor="primary">
        {asset.name}
      </Heading>
    </S.titleWrapper>
    <S.ContentWrapper>
      <S.LeftBlock>
        <S.Image
          src={`http://localhost:3333/images/${asset.image}`}
          alt={'Foto do Ativo'}
          role="img"
        />
      </S.LeftBlock>
      <S.RightBlock>
        <strong>Modelo:</strong>
        <span>{asset.assetModel}</span>
        <strong>Descrição:</strong>
        <span>{asset.description}</span>
        <strong>Responsável:</strong>
        <span>{asset.responsible}</span>
        <strong>Status:</strong>
        <span>{asset.status}</span>
        <strong>Saúde:</strong>
        <span>{asset.healthLevel}</span>
      </S.RightBlock>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default AssetCard
