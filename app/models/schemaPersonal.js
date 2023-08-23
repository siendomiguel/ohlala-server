import mongoose from 'mongoose'

const especialitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false
    }
  },
  {
    _id: false
  }
)

export const personalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    birthday: {
      type: Date,
      required: false
    },
    address: {
      type: String,
      required: true
    },
    dni_type: {
      type: String,
      required: true
    },
    dni_number: {
      type: Number,
      required: true
    },
    phone_number: {
      type: Number,
      required: true
    },
    especiality: especialitySchema,
    state: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)
