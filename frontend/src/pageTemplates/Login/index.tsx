import Select from 'components/Select'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'
import { useState } from 'react'

export type CompaniesProps = {
  name: string
  _id: string
}
export type CompaniesTemplateProps = { companies: CompaniesProps[] }

const LoginTemplate = ({ companies }: CompaniesTemplateProps) => {
  const [formValues, setFormValues] = useState({ company: '' })

  const handleInput = (field: string, value: string) => {
    setFormValues((s) => ({ ...s, [field]: value }))
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

          <Select
            name="Empresa"
            onInputChange={(v) => handleInput('company', v)}
            value={formValues.company}
            label="Empresa"
            type="text"
          >
            {companies.map((company) => (
              <option key={company.name} value={company.name}>
                {company.name.toUpperCase()}
              </option>
            ))}
          </Select>
        </S.ContentWrapper>
      </S.ContentBlock>
    </S.Wrapper>
  )
}

export default LoginTemplate
