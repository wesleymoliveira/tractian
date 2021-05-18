import React, { FormEvent, useState } from 'react'
import Router from 'next/router'
import { useModal } from '../../context/ModalContext'
import TextField from 'components/TextField'
import { FormWrapper } from '../Form'
import * as S from './styles'

import Button from 'components/Button'
import { useSession } from 'next-auth/client'

const FormAddUnit = () => {
  const [session] = useSession()
  const { changeModalView } = useModal()
  const [name, setName] = useState('')

  function resetFields() {
    setName('')
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      name: name,
    }

    await fetch(`http://localhost:3333/${session?.user?.name}/units`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: new Headers({
        Authorization: 'Bearer ' + session?.jwt,
        'Content-Type': 'application/json',
      }),
    })

    resetFields()
    alert('Unidade cadastrada com sucesso.')
    changeModalView()
    Router.reload()
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          label="Unidade"
          type="text"
        />
        <S.ButtonsWrapper>
          <Button
            type="reset"
            onClick={() => {
              resetFields()
              changeModalView()
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

export default FormAddUnit
