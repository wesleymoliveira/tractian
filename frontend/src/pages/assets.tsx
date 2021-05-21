import AssetsTemplate, { AssetsTemplateProps } from '../pageTemplates/Assets'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import api from '../services/api'
import { UnitProps } from 'pageTemplates/Units'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'

export default function AssetsPage(
  props: Pick<AssetsTemplateProps, 'filterItems'>,
) {
  const { asPath } = useRouter()
  const [assetsApi, setAssetsApi] = useState([])
  const [loading, setLoading] = useState(false)
  const [session] = useSession()

  useEffect(() => {
    setLoading(true)
    const fetchAssets = async () => {
      if (asPath === '/assets') {
        console.log(`/${session?.user?.name}/assets`)
        const result = await api.get(`/${session?.user?.name}/assets`, {
          headers: {
            Authorization: `Bearer ${session?.jwt}`,
          },
        })
        setAssetsApi(result.data)
      } else {
        const result = await api.get(`${asPath}`, {
          headers: {
            Authorization: `Bearer ${session?.jwt}`,
          },
        })
        setAssetsApi(result.data)
      }

      setLoading(false)
    }
    fetchAssets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath])

  return <AssetsTemplate assets={assetsApi} loading={loading} {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

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
  const result = await response.json()
  const data = result.map(({ _id, name }: UnitProps) => ({
    name: _id,
    label: name,
  }))

  const filterUnit = {
    title: 'Unidades',
    name: 'unit',
    type: 'radio',
    fields: data,
  }

  const filterItems = [filterUnit]

  return {
    props: {
      session,
      filterItems: filterItems,
    },
  }
}
