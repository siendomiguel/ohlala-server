import mongoose from 'mongoose'
import { registroDiarioSchema } from './schemaDiario.js'

export const RegistroDiario = mongoose.model('Registro_Diario', registroDiarioSchema)
