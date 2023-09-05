import mongoose from 'mongoose'

export const registroDiarioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: Number, default: null },
    priceMaterial: { type: Number, default: null },
    description: { type: String, default: null },
    madeBy: { type: String, default: null },
    typeRegister: { type: String, default: null },
    paymentMethod: { type: String, default: null },
    category: { type: String, default: null },
    aditional: { type: String, required: false }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)
