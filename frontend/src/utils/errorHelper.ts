import { AssetProps } from 'components/FormAddAsset'
import Joi from 'joi'

const fieldsValidations = {
  name: Joi.string().required().messages({
    'string.empty': `Nome do ativo não pode estar vazio`,
    'any.required': `Nome é obrigatório.`,
  }),
  description: Joi.string().required().messages({
    'string.empty': `Descrição do ativo não pode estar vazio`,
    'any.required': `A descrição é obrigatória.`,
  }),
  assetModel: Joi.string().required().messages({
    'string.empty': `Modelo do ativo não pode estar vazio`,
    'any.required': `Modelo é obrigatório.`,
  }),
  responsable: Joi.string().required().messages({
    'string.empty': `Responsável pelo ativo não pode estar vazio`,
    'any.required': `Responsável é obrigatório.`,
  }),
  status: Joi.string().required().messages({
    'string.empty': `Status do ativo não pode estar vazio`,
    'any.required': `Status é obrigatório.`,
  }),
  healthLevel: Joi.string().required().messages({
    'string.empty': `Nível de Saúde do ativo não pode estar vazio`,
    'any.required': `Nível de Saúde é obrigatório.`,
  }),
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function validateAssetToAdd(values: AssetProps) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
