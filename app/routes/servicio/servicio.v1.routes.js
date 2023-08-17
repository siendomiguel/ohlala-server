import { Router } from 'express'
import {
  getAllServicios,
  createServicio,
  deleteServicio,
  updateServicio,
  getServicioById
} from '../../controllers/servicioController.js'

export const servicioRouter = Router()

servicioRouter
  .get('/', getAllServicios)
  .post('/', createServicio)
  .patch('/:id', updateServicio)
  .delete('/:id', deleteServicio)
  .get('/:id', getServicioById)
