import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'dark'
  size?: 'small' | 'big'
  hideOnMobile?: boolean
}

const Logo = ({
  hideOnMobile = false,
  color = 'white',
  size = 'small',
}: LogoProps) => (
  <S.Wrapper color={color} hideOnMobile={hideOnMobile} size={size}>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 158 48"
      role="img"
      aria-label="Tractian"
    >
      <path
        id="path271385"
        fill="currentColor"
        className="hide"
        d="M9.06 7.89v7.57h2.76V7.89h3V5.71H6.06v2.18z"
        transform="translate(-6.06 -5.46)"
      />
      <path
        id="path271387"
        fill="currentColor"
        className="hide"
        d="M22.53 12.4a3.39 3.39 0 001.41-1.23 3.33 3.33 0 00.5-1.85 3.33 3.33 0 00-2-3.17 5.65 5.65 0 00-2.3-.44h-4.49v2.17h4.29a1.92 1.92 0 011.28.38 1.36 1.36 0 01.43 1.06 1.35 1.35 0 01-.43 1.06 1.92 1.92 0 01-1.28.36h-4.29v4.72h2.76v-2.59h1.5l1.77 2.59h3z"
        transform="translate(-6.06 -5.46)"
      />
      <path
        id="path271389"
        fill="currentColor"
        className="hide"
        d="M32.39 5.71h-2.72l-4.31 9.75h2.82l.76-1.89.81-2L31 8.41l1.25 3.12.81 2 .77 1.89h2.87z"
        transform="translate(-6.06 -5.46)"
      />
      <path
        id="path271391"
        fill="currentColor"
        className="hide"
        d="M38.88 15a5.79 5.79 0 002.76.64 5.86 5.86 0 002.41-.47 4.57 4.57 0 001.79-1.37l-1.76-1.59a2.93 2.93 0 01-3.72.8 2.33 2.33 0 01-1-1 3.28 3.28 0 010-2.91 2.41 2.41 0 011-1 2.9 2.9 0 011.42-.35 3 3 0 012.3 1.14l1.76-1.59a4.85 4.85 0 00-1.79-1.36 6 6 0 00-2.41-.48 5.8 5.8 0 00-2.76.66A4.8 4.8 0 0037 7.92a4.93 4.93 0 00-.69 2.62 4.93 4.93 0 00.69 2.62A4.76 4.76 0 0038.88 15z"
        transform="translate(-6.06 -5.46)"
      />
      <path
        id="path271393"
        fill="currentColor"
        className="hide"
        d="M49.28 7.89v7.57H52V7.89h3V5.71h-8.72v2.18z"
        transform="translate(-6.06 -5.46)"
      />
      <path
        id="path271395"
        fill="currentColor"
        d="M55.87 5.71v9.75h2.76V5.71z"
        transform="translate(-6.06 -5.46)"
      />
      <path
        id="path271397"
        fill="currentColor"
        d="M66.27 5.71h-2.72l-4.31 9.75h2.82l.77-1.89.8-2 1.26-3.12 1.25 3.12.81 2 .77 1.89h2.87z"
        transform="translate(-6.06 -5.46)"
      />
      <path
        id="path271399"
        className="hide"
        fill="currentColor"
        d="M71.19 15.46h2.71v-2.91l-2.69-3.44zm6.58-9.75v2.8l2.7 3.26V5.71zm0 5.2l-4.31-5.2h-2.27V7l2.71 3.26 4.3 5.2h2.28v-1.13l-2.71-3.44z"
        transform="translate(-6.06 -5.46)"
      />
    </svg>
  </S.Wrapper>
)

export default Logo