import mongoose from 'mongoose'
import { servicioSchema } from './schemaServicios.js'

export const Servicio = mongoose.model('Servicio', servicioSchema)
