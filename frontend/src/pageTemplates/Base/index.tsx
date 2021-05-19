import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import Menu from 'components/Menu'
import Navigator from 'components/Navigator'

import * as S from './styles'

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
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Base
