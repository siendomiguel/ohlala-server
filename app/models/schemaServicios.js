import mongoose from 'mongoose'

export const servicioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      minLength: 10
    },
    price: {
      type: Number,
      required: false,
      default: 0,
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} no es un número entero'
      }
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)
