import { useState } from 'react'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Select from 'components/Select'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

export type CompaniesProps = {
  name: string
  _id: string
}
export type CompaniesTemplateProps = { companies: CompaniesProps[] }

const LoginTemplate = ({ companies }: CompaniesTemplateProps) => {
  const [formValues, setFormValues] = useState({ name: '' })
  const [loading, setloading] = useState(false)
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setFormValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setloading(true)

    const result = await signIn('credentials', {
      ...formValues,
      redirect: false,
      callbackUrl: '/',
    })
    if (result?.url) {
      return push(result?.url)
    }

    setloading(false)
    console.error('Verifique as credenciais.')
  }

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
            Login
          </Heading>

          <form onSubmit={handleSubmit}>
            <Select
              name="Empresa"
              onInputChange={(v) => handleInput('name', v)}
              value={formValues.name}
              label="Empresa"
              type="text"
            >
              {companies.map((company) => (
                <option key={company.name} value={company.name}>
                  {company.name.toUpperCase()}
                </option>
              ))}
            </Select>
            {loading ? (
              <S.LoadingWrapper>
                <S.LoginLoading />
              </S.LoadingWrapper>
            ) : (
              <>
                <Button type="submit" fullWidth>
                  Fazer login
                </Button>
                <Link href="/sign-up" passHref>
                  <Button minimalist as="a">
                    Ainda não cadastrou sua empresa?
                    <strong> Cadastre agora!</strong>
                  </Button>
                </Link>
              </>
            )}
          </form>
        </S.ContentWrapper>
      </S.ContentBlock>
    </S.Wrapper>
  )
}

export default LoginTemplate
