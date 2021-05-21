import React, { FormEvent, useState } from 'react'

import TextField from 'components/TextField'
import { FormWrapper } from '../Form'
import * as S from './styles'

import Button from 'components/Button'
import api from 'services/api'

const FormAddCompany = () => {
  const [name, setName] = useState('')

  function resetFields() {
    setName('')
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      name: name,
    }
    console.log(data)
    console.log(name)

    await api.post('companies', data)

    resetFields()
    alert('Empresa cadastrada com sucesso.')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          label="Empresa"
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

export default FormAddCompany
