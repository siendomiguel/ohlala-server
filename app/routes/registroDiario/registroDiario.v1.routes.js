import { Router } from 'express'
import {
  getAllRegistros,
  createRegistro,
  updateRegistro,
  getRegistroById,
  deleteRegistroById
} from '../../controllers/registroController.js'

export const registroRouter = Router()

registroRouter
  .get('/', getAllRegistros)
  .post('/', createRegistro)
  .patch('/:id', updateRegistro)
  .get('/:id', getRegistroById)
  .delete('/:id', deleteRegistroById)
