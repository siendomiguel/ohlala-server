import personalService from '../services/personalService.js'

export const createPersonal = async (req, res) => {
  try {
    const personalData = req.body
    const savedPersonal = await personalService.createPersonal(personalData)
    res.status(201).json(savedPersonal)
  } catch (error) {
    res.status(500).send({ error })
    console.log(error)
  }
}

export const getAllPersonal = async (req, res) => {
  try {
    const personal = await personalService.getAllPersonal()
    res.status(200).json(personal)
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const getPersonalById = async (req, res) => {
  try {
    const { id } = req.params
    const personal = await personalService.getPersonalById(id)
    if (!personal) {
      return res.status(404).json({ message: 'Personal no encontrado' })
    }
    res.status(200).json(personal)
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const updatePersonal = async (req, res) => {
  try {
    const { id } = req.params // Obtiene el ID del parámetro de la solicitud
    const updateData = req.body // Datos de actualización desde la solicitud
    const patchedPersonal = await personalService.updatePersonal(id, updateData)
    if (!patchedPersonal) {
      return res.status(404).json({ message: 'Personal no encontrado' })
    }
    res.status(200).json(patchedPersonal)
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const deletePersonalById = async (req, res) => {
  try {
    const { id } = req.params // Obtiene el ID del parámetro de la solicitud
    const deletedPersonal = await personalService.deletePersonalById(id)
    if (!deletedPersonal) {
      return res.status(404).json({ message: 'Personal no encontrado' })
    }
    res.status(200).json({ message: 'Personal eliminado correctamente' })
  } catch (error) {
    res.status(500).send({ error })
  }
}
