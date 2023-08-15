import { Router } from 'express'
import { personalRouter } from './personal/personal.v1.routes.js'

export const router = Router()

router.use('/api/v1/personal', personalRouter)
