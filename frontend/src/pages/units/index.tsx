import { GetServerSidePropsContext } from 'next'

import protectedRoutes from '../../utils/protected-routes'

import Units, { UnitProps, UnitsTemplateProps } from '../../pageTemplates/Units'

export default function UnitsPage(props: UnitsTemplateProps) {
  return <Units {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) return {}

  const response = await fetch(
    `http://localhost:3333/${session?.user?.name}/units`,
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
      props: { session, units: {} },
    }
  }

  return {
    props: {
      session,
      units: data.map((unit: UnitProps) => ({
        name: unit.name,
        _id: unit._id,
      })),
    },
  }
}
