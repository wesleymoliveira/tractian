import AssetsTemplate from '../pageTemplates/Assets'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import api from '../services/api'
import { UnitProps } from 'pageTemplates/Units'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'

export default function AssetsPage() {
  const { asPath } = useRouter()
  const [assetsApi, setAssetsApi] = useState([])
  const [units, setUnits] = useState([])
  const [loading, setLoading] = useState(false)
  const [session] = useSession()

  useEffect(() => {
    const fetchUnits = async () => {
      const response = await api.get(`/${session?.user?.name}/units`, {
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      })
      console.log(response.data)
      const data = response.data.map(({ _id, name }: UnitProps) => ({
        name: _id,
        label: name,
      }))
      setUnits(data)
    }
    if (session) {
      fetchUnits()
    }
  }, [session])

  const filterUnit = {
    title: 'Unidades',
    name: 'unit',
    type: 'radio',
    fields: units,
  }
  const filterItems = [filterUnit]

  useEffect(() => {
    setLoading(true)
    const fetchAssets = async () => {
      if (asPath === '/assets') {
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

    if (session) {
      fetchAssets()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath])

  //

  return (
    <AssetsTemplate
      filterItems={filterItems}
      assets={assetsApi}
      loading={loading}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session,
    },
  }
}
