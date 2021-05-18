import Router from 'next/router'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { useSession } from 'next-auth/client'

import * as S from './styles'

export type UnitCardProps = {
  _id: string
  name: string
}

const UnitCard = ({ _id, name }: UnitCardProps) => {
  const [session] = useSession()

  async function handleDeleteUnit(_id: string) {
    await fetch(`http://localhost:3333/${session?.user?.name}/units/${_id}`, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: 'Bearer ' + session?.jwt,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
    alert('OK')
    Router.reload()
  }

  return (
    <>
      <S.Wrapper>
        <S.WrapperTitle>
          <Heading size="medium" color="black">
            {name}
          </Heading>
          <Button onClick={() => handleDeleteUnit(_id)}>remover</Button>
        </S.WrapperTitle>
      </S.Wrapper>
    </>
  )
}

export default UnitCard
