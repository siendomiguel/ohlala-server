import { Router } from 'express'
import {
  getAllPersonal,
  createPersonal,
  getPersonalById,
  updatePersonal,
  deletePersonalById
} from '../../controllers/personalController.js'

export const personalRouter = Router()

personalRouter
  .get('/', getAllPersonal)
  .post('/', createPersonal)
  .get('/:id', getPersonalById)
  .patch('/:id', updatePersonal)
  .delete('/:id', deletePersonalById)
