import { Servicio } from '../models/servicio.js'

const getAllServicios = async () => {
  try {
    const serviciosList = await Servicio.find()
    return serviciosList
  } catch (error) {
    throw new Error('Error al obtener los registros de todos los servicios')
  }
}

const createServicio = async (servicioData) => {
  try {
    const newServicio = new Servicio(servicioData)
    const savedServicio = await newServicio.save()
    return savedServicio
  } catch (error) {
    console.error('Error al crear el servicio:', error)
    throw new Error(error.message)
  }
}

const deleteServicioById = async (id) => {
  try {
    const deletedServicio = await Servicio.findByIdAndDelete(id)
    return deletedServicio
  } catch (error) {
    throw new Error('Error al eliminar el servicio')
  }
}

const getServicioById = async (id) => {
  try {
    const servicioById = await Servicio.findById(id)
    return servicioById
  } catch (error) {
    throw new Error('Error al obtener el servicio')
  }
}

const updateServicioById = async (id, updateData) => {
  try {
    const actualizacionServicio = await Servicio.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true
      }
    )
    return actualizacionServicio
  } catch (error) {
    throw new Error('Error al intentar actualizar el documento')
  }
}

const servicioService = {
  getAllServicios,
  createServicio,
  deleteServicioById,
  updateServicioById,
  getServicioById
}

export default servicioService
