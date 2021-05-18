import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protected-routes'

import Users, { UserProps, UsersTemplateProps } from 'pageTemplates/Users'

export default function UsersPage(props: UsersTemplateProps) {
  return <Users {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) return {}

  const response = await fetch(
    `http://localhost:3333/${session?.user?.name}/users`,
    {
      method: 'get',
      headers: new Headers({
        Authorization: 'Bearer ' + session?.jwt,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    },
  )
  const data = await response.json()

  if (!data) {
    return {
      props: { session, users: {} },
    }
  }

  return {
    props: {
      session,
      users: data.map((user: UserProps) => ({
        name: user.name,
        _id: user._id,
      })),
    },
  }
}
