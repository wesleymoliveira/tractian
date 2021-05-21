import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'
import FormAddCompany from 'components/FormAddCompany'

const Register = () => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <div>
            <Heading size="huge">
              O sistema preditivo mais completo do mercado
            </Heading>
            <S.Subtitle>
              <strong>ESCUTE</strong> as suas máquinas, elas estão falando.
            </S.Subtitle>
          </div>

          <S.Footer>Wesley 2021 - Todos os direitos reservados.</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.ContentBlock>
        <S.ContentWrapper>
          <Logo size="big" color="dark" />

          <Heading color="black" lineColor="secondary" lineLeft>
            Register
          </Heading>
          <FormAddCompany />

          <Link href="/login" passHref>
            <Button minimalist as="a">
              <strong> Volte para fazer o login</strong>
            </Button>
          </Link>
        </S.ContentWrapper>
      </S.ContentBlock>
    </S.Wrapper>
  )
}

export default Register
