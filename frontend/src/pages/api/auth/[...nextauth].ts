import NextAuth, { User } from 'next-auth'
import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'

type AuthorizeProps = {
  name: string
}
const options = {
  pages: {
    signIn: '/login',
  },
  providers: [
    Providers.Credentials({
      name: 'Login',
      credentials: {},
      async authorize({ name }: AuthorizeProps) {
        const response = await fetch(`http://localhost:3333/sessions`, {
          method: 'POST',
          body: new URLSearchParams({ name }),
        })

        const data = await response.json()

        if (data.company) {
          return { ...data.company, jwt: data.token }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    session: async (session: Session, company: User) => {
      session.jwt = company.jwt
      session.id = company._id

      return Promise.resolve(session)
    },
    jwt: async (token: JWT, company: User) => {
      if (company) {
        token.id = company._id
        token.name = company.name
        token.jwt = company.jwt
      }

      return Promise.resolve(token)
    },
  },
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
