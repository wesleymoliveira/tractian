import styled from 'styled-components'
import * as ButtonStyles from 'components/Button/styles'
import * as TextFieldStyles from 'components/TextField/styles'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const WrapperHeading = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
`
export const WrapperSearch = styled.div`
  ${TextFieldStyles.InputWrapper} {
    display: flex;
    min-width: 35rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`
export const WrapperButton = styled.div`
  ${ButtonStyles.Wrapper} {
    margin-left: 2rem;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
