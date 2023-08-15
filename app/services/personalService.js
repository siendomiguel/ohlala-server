import { Personal } from '../models/personal.js'

const getAllPersonal = async () => {
  try {
    const personalList = await Personal.find() // Obtiene todos los documentos
    return personalList
  } catch (error) {
    throw new Error('Error al obtener los registros de personal')
  }
}

const createPersonal = async (personalData) => {
  try {
    const newPersonal = new Personal(personalData)
    const savedPersonal = await newPersonal.save()
    return savedPersonal
  } catch (error) {
    console.log(error)
  }
}

const getPersonalById = async (id) => {
  try {
    const personal = await Personal.findById(id)
    return personal
  } catch (error) {
    throw new Error('Error al obtener el registro de personal por su ID')
  }
}

const updatePersonal = async (id, updateData) => {
  try {
    const patchedPersonal = await Personal.findByIdAndUpdate(id, updateData, {
      new: true // Devuelve el documento actualizado
    })
    return patchedPersonal
  } catch (error) {
    throw new Error(
      'Error al aplicar la actualización parcial al registro de personal por su ID'
    )
  }
}

const deletePersonalById = async (id) => {
  try {
    const deletedPersonal = await Personal.findByIdAndDelete(id)
    return deletedPersonal
  } catch (error) {
    throw new Error('Error al eliminar el registro de personal por su ID')
  }
}

const personalService = {
  getAllPersonal,
  createPersonal,
  getPersonalById,
  updatePersonal,
  deletePersonalById
}

export default personalService
