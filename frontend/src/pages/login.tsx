import LoginTemplate, {
  CompaniesProps,
  CompaniesTemplateProps,
} from 'pageTemplates/Login'

export default function Login(props: CompaniesTemplateProps) {
  return <LoginTemplate {...props} />
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/companies/')

  const data = await response.json()

  if (!data) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      companies: data.map((company: CompaniesProps) => ({
        name: company.name,
        companyId: company._id,
      })),
    },
  }
}
