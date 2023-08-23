import registroService from '../services/registroService.js'

export const getAllRegistros = async (req, res) => {
  try {
    const registros = await registroService.getAllRegistros()
    res.status(200).send(registros)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const createRegistro = async (req, res) => {
  try {
    const registroData = req.body
    const savedRegistro = await registroService.createRegistro(registroData)
    res.status(201).json(savedRegistro)
  } catch (error) {
    res.status(500).send({ error })
    console.log(error)
  }
}

export const updateRegistro = async (req, res) => {
  try {
    const { id } = req.params // Obtiene el ID del parámetro de la solicitud
    const updateData = req.body // Datos de actualización desde la solicitud
    const patchedRegistro = await registroService.updateRegistro(id, updateData)
    if (!patchedRegistro) {
      return res.status(404).json({ message: 'Registro no encontrado' })
    }
    res.status(200).json(patchedRegistro)
  } catch (error) {
    res.status(500).send({ error })
  }
}
export const getRegistroById = async (req, res) => {
  try {
    const { id } = req.params
    const registro = await registroService.getRegistroById(id)
    if (!registro) {
      return res.status(404).json({ message: 'Registro no encontrado' })
    }
    res.status(200).json(registro)
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const deleteRegistroById = async (req, res) => {
  try {
    const { id } = req.params // Obtiene el ID del parámetro de la solicitud
    const deletedRegistro = await registroService.deleteRegistroById(id)
    if (!deletedRegistro) {
      return res.status(404).json({ message: 'Registro no encontrado' })
    }
    res.status(200).json({ message: 'Registro eliminado correctamente' })
  } catch (error) {
    res.status(500).send({ error })
    console.log(error)
  }
}
