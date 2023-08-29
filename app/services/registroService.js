import { RegistroDiario } from '../models/registro.js'

const getAllRegistros = async () => {
  try {
    const registrosDiariosList = await RegistroDiario.find().sort({
      created_at: -1
    })
    return registrosDiariosList
  } catch (error) {
    throw new Error('Error al obtener los registros diarios')
  }
}

const createRegistro = async (registroData) => {
  try {
    const newRegistro = new RegistroDiario(registroData)
    const savedRegistro = await newRegistro.save()
    return savedRegistro
  } catch (error) {
    throw new Error(`Error al crear el registro: ${error}`)
  }
}

const getRegistroById = async (id) => {
  try {
    const registro = await RegistroDiario.findById(id)
    return registro
  } catch (error) {
    throw new Error(
      'Error al obtener el registro de un ingreso o egreso diario por su ID'
    )
  }
}

const updateRegistro = async (id, updateData) => {
  try {
    const patchedRegistro = await RegistroDiario.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true // Devuelve el documento actualizado
      }
    )
    return patchedRegistro
  } catch (error) {
    throw new Error(
      'Error al aplicar la actualización parcial al registro de ingresos y egresos diarios por su ID'
    )
  }
}

const deleteRegistroById = async (id) => {
  try {
    const deletedRegistro = await RegistroDiario.findByIdAndDelete(id)
    return deletedRegistro
  } catch (error) {
    throw new Error('Error al eliminar el registro')
  }
}

const registroService = {
  getAllRegistros,
  createRegistro,
  updateRegistro,
  getRegistroById,
  deleteRegistroById
}

export default registroService
