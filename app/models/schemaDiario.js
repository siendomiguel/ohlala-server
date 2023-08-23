import mongoose from 'mongoose'

export const registroDiarioSchema = new mongoose.Schema(
  {
    fecha: { type: Date, default: Date.now },
    nombreServicio: { type: String, required: true },
    ingresoEfectivo: { type: Number, default: 0 },
    ingresoBancoDavivienda: { type: Number, default: 0 },
    ingresoBancoBancolombia: { type: Number, default: 0 },
    egresoDiarioEfectivo: { type: Number, default: 0 },
    egresosDiarioBancolombia: { type: Number, default: 0 },
    egresosDiarioDavivienda: { type: Number, default: 0 },
    costoMaterialServicio: { type: Number, default: 0 },
    gastoMaterialEfectivo: { type: Number, default: 0 },
    gastoMaterialBancolombia: { type: Number, default: 0 },
    gastoMaterialDavivienda: { type: Number, default: 0 },
    vale: { type: Number, default: 0 },
    usuario: { type: String, required: true }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)
