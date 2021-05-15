import styled, { css } from 'styled-components'

export const ButtonsWrapper = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImagesContainer = styled.div`
  width: 150px;
  height: 150px;
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
`

export const NewImage = styled.label`
  ${({ theme }) => css`
    height: 150px;
    background: ${theme.colors.lightGray};
    border: 1px dashed ${theme.colors.primary};
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
export const Input = styled.input`
  display: none;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`
