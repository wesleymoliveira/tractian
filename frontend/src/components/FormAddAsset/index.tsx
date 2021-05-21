import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

import TextField from 'components/TextField'
import * as S from './styles'

import Button from 'components/Button'

import { FiPlus, FiXCircle } from 'react-icons/fi'
import { FormError, FormWrapper } from 'components/Form'

import { FieldErrors, validateAssetToAdd } from '../../utils/errorHelper'
import { useModal } from 'context/ModalContext'

export type AssetProps = {
  name: string
  description: string
  assetModel: string
  responsable: string
  status: string
  healthLevel: string
}

const FormAddAsset = () => {
  const { changeModalView } = useModal()
  const router = useRouter()
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formValues, setFormValues] = useState<AssetProps>({
    name: '',
    description: '',
    assetModel: '',
    responsable: '',
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
        responsable: '',
        status: '',
        healthLevel: '',
      })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setFormError('')
    const errors = validateAssetToAdd(formValues)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      console.log(errors)
      return
    }

    setFieldError({})

    const data = new FormData()

    data.append('image', image)
    data.append('name', formValues.name)
    data.append('description', formValues.description)
    data.append('responsible', formValues.responsable)
    data.append('status', formValues.status)
    data.append('healthLevel', formValues.healthLevel)

    console.log(data)

    resetFields()
    alert('Ativo cadastrado com sucesso!')

    router.push('/units')
    changeModalView()
  }

  const handleInput = (field: string, value: string) => {
    setFormValues((s) => ({ ...s, [field]: value }))
  }

  const handleSelectedImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    setImage(e.target.files[0])
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <FiXCircle /> {formError}
        </FormError>
      )}
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
          error={fieldError?.name}
          onInputChange={(v) => handleInput('name', v)}
          value={formValues.name}
          label="Nome"
          type="text"
        />

        <TextField
          name="Descrição"
          error={fieldError?.description}
          onInputChange={(v) => handleInput('description', v)}
          value={formValues.description}
          label="Descrição"
          type="text"
          as="textarea"
        />

        <TextField
          name="Modelo"
          error={fieldError?.assetModel}
          onInputChange={(v) => handleInput('assetModel', v)}
          value={formValues.assetModel}
          label="Modelo"
          type="text"
        />

        <TextField
          name="Responsável"
          error={fieldError?.responsible}
          onInputChange={(v) => handleInput('responsible', v)}
          value={formValues.responsable}
          label="Responsável"
          type="text"
        />
        <TextField
          name="Status"
          error={fieldError?.status}
          onInputChange={(v) => handleInput('status', v)}
          value={formValues.status}
          label="Status"
          type="text"
        />
        <TextField
          name="Nível de Saúde"
          error={fieldError?.healthLevel}
          onInputChange={(v) => handleInput('healthLevel', v)}
          value={formValues.healthLevel}
          label="Nível de Saúde"
          type="number"
        />

        <S.ButtonsWrapper>
          <Button
            type="reset"
            onClick={() => {
              changeModalView()
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
