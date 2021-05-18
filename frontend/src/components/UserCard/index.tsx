import Router from 'next/router'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { useSession } from 'next-auth/client'

import * as S from './styles'

export type UserCardProps = {
  _id: string
  name: string
}

const UserCard = ({ _id, name }: UserCardProps) => {
  const [session] = useSession()

  async function handleDeleteUser(_id: string) {
    await fetch(`http://localhost:3333/${session?.user?.name}/users/${_id}`, {
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
          <Button onClick={() => handleDeleteUser(_id)}>remover</Button>
        </S.WrapperTitle>
      </S.Wrapper>
    </>
  )
}

export default UserCard
