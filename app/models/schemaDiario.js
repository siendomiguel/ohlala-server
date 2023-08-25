import mongoose from 'mongoose'

export const registroDiarioSchema = new mongoose.Schema(
  {
    fecha: { type: Date, default: Date.now },
    nombreServicio: { type: String, required: true },
    materialServicio: { type: Number, default: null },
    ingresoEfectivo: { type: Number, default: null },
    ingresoBancoDavivienda: { type: Number, default: null },
    ingresoBancoBancolombia: { type: Number, default: null },
    costoMaterialServicio: { type: Number, default: null },
    gastoDiarioEfectivo: { type: Number, default: null },
    gastoDiarioBancolombia: { type: Number, default: null },
    gastoDiarioDavivienda: { type: Number, default: null },
    vale: { type: Number, default: null },
    usuario: { type: String, required: true },
    gastoMaterialEfectivo: { type: Number, default: null },
    gastoMaterialBancolombia: { type: Number, default: null },
    gastoMaterialDavivienda: { type: Number, default: null },
    typeRegister: { type: String, required: true }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)
