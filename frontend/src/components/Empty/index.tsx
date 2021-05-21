import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Image
      src="/img/empty.svg"
      alt="homem com caixa vazia nas mãos"
      role="image"
    />

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Voltar</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
