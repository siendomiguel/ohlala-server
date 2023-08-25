import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uri = `mongodb+srv://${process.env.USER}:${process.env.DB}@${process.env.DB_PROJECT}.ph3w9qc.mongodb.net/`

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// Conectar a la base de datos
mongoose.connect(uri, options)
  .then(() => {
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err)
  })

// Manejar eventos de conexión y desconexión
mongoose.connection.on('connected', () => {
//  console.log('🟢 Conectado a la base de datos')
})

mongoose.connection.on('disconnected', () => {
  console.log('🔴 Desconectado de la base de datos')
})

mongoose.connection.on('error', err => {
  console.error('❌ Error de conexión:', err)
})

// Exportar la instancia de conexión
export default mongoose.connection
