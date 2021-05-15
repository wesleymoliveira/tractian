import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

import TextField from 'components/TextField'
import * as S from './styles'

import Button from 'components/Button'

import { FiPlus } from 'react-icons/fi'
import { FormWrapper } from 'components/Form'

export type AssetProps = {
  name: string
  description: string
  assetModel: string
  responsible: string
  status: string
  healthLevel: string
}

const FormAddAsset = () => {
  const router = useRouter()
  const [formValues, setFormValues] = useState<AssetProps>({
    name: '',
    description: '',
    assetModel: '',
    responsible: '',
    status: '',
    healthLevel: '',
  })

  const [image, setImage] = useState<any>()
  const [previewImage, setPreviewImage] = useState<string>('')

  function resetFields() {
    setImage(undefined),
      setFormValues({
        name: '',
        description: '',
        assetModel: '',
        responsible: '',
        status: '',
        healthLevel: '',
      })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = new FormData()

    data.append('image', image)
    data.append('name', formValues.name)
    data.append('description', formValues.description)
    data.append('responsible', formValues.responsible)
    data.append('status', formValues.status)
    data.append('healthLevel', formValues.healthLevel)

    console.log(data)

    resetFields()
    alert('Ativo cadastrado com sucesso!')

    router.push('/units')
  }

  const handleInput = (field: string, value: string) => {
    setFormValues((s) => ({ ...s, [field]: value }))
  }

  const handleSelectedImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    setImage(e.target.files[0])
    console.log(image)
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <>
          <S.Label htmlFor="image">Adicione a imagem do ativo</S.Label>
          <S.ImagesContainer>
            {image ? (
              <S.Image src={previewImage} alt={formValues.name} />
            ) : (
              <S.NewImage htmlFor="image">
                <FiPlus size={24} color="#15b6d6" />
              </S.NewImage>
            )}
          </S.ImagesContainer>
          <S.Input type="file" onChange={handleSelectedImage} id="image" />
        </>
        <TextField
          name="Nome"
          onInputChange={(v) => handleInput('name', v)}
          value={formValues.name}
          label="Nome"
          type="text"
        />

        <TextField
          name="Descrição"
          onInputChange={(v) => handleInput('description', v)}
          value={formValues.description}
          label="Descrição"
          type="text"
        />

        <TextField
          name="Modelo"
          onInputChange={(v) => handleInput('assetModel', v)}
          value={formValues.assetModel}
          label="Modelo"
          type="text"
        />

        <TextField
          name="Responsável"
          onInputChange={(v) => handleInput('responsible', v)}
          value={formValues.responsible}
          label="Responsável"
          type="text"
        />
        <TextField
          name="Status"
          onInputChange={(v) => handleInput('status', v)}
          value={formValues.status}
          label="Status"
          type="text"
        />
        <TextField
          name="Nível de Saúde"
          onInputChange={(v) => handleInput('healthLevel', v)}
          value={formValues.healthLevel}
          label="Nível de Saúde"
          type="text"
        />

        <S.ButtonsWrapper>
          <Button
            type="reset"
            onClick={() => {
              resetFields()
            }}
          >
            Cancelar
          </Button>
          <Button type="submit">Adicionar</Button>
        </S.ButtonsWrapper>
      </form>
    </FormWrapper>
  )
}

export default FormAddAsset
