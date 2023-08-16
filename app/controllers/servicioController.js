import servicioService from '../services/servicioService.js'

export const getAllServicios = async (req, res) => {
  try {
    const servicios = await servicioService.getAllServicios()
    res.status(200).json(servicios)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const createServicio = async (req, res) => {
  try {
    const servicioData = req.body
    const savedServicio = await servicioService.createServicio(servicioData)
    res.status(201).json(savedServicio)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteServicio = async (req, res) => {
  try {
    const { id } = req.params
    const deleteServicio = await servicioService.deleteServicioById(id)
    if (!deleteServicio) {
      return res.status(404).json({ message: 'Servicio no encontrado' })
    }
    res.status(200).json({ message: 'Servicio eliminado correctamente' })
  } catch (error) {
    res.status(500).send(error)
  }
}

export const updateServicio = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const actualizacionServicio = await servicioService.updateServicioById(
      id,
      updateData
    )
    if (!actualizacionServicio) {
      return res
        .status(400)
        .json({ message: 'Documento de servicio no encontrado' })
    }
    res.status(200).json(actualizacionServicio)
  } catch (error) {
    res.status(500).send({ error })
  }
}
