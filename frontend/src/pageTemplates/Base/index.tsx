import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import Menu from 'components/Menu'
import Navigator from 'components/Navigator'

import * as S from './styles'
import { Container } from 'next/app'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { asPath } = useRouter()
  const [session] = useSession()

  return (
    <S.Wrapper>
      <Menu username={session?.user?.name} />
      <Navigator activeLink={asPath} />
      <Container>
        <S.Content>{children}</S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Base
