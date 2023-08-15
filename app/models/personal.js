import mongoose from 'mongoose'
import { personalSchema } from './schemaPersonal.js'

export const Personal = mongoose.model('Personal', personalSchema)
