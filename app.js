import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import databaseConnection from './config/database.js'
import { router } from './app/routes/index.js'
dotenv.config()

const app = express()

const PORT = process.env.PORT ?? 1234

databaseConnection.once('open', () => {
  console.log('🟢 Conexión establecida con la base de datos 🟢')

  app.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`)
  })
})

databaseConnection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err)
})

app.use(json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Mi API' })
})

app.use('/', router)
