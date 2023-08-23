import { Router } from 'express'
import { personalRouter } from './personal/personal.v1.routes.js'
import { servicioRouter } from './servicio/servicio.v1.routes.js'
import { registroRouter } from './registroDiario/registroDiario.v1.routes.js'

export const router = Router()

router.use('/api/v1/personal', personalRouter)
router.use('/api/v1/servicio', servicioRouter)
router.use('/api/v1/registro', registroRouter)
