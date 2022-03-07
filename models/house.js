const { default: mongoose } = require('mongoose')

const houseSchema = new mongoose.Schema({
  type: Number,
  required: true,
  unique: true,
  min: 1,
  max: 12,
  validate: {
    validator: (value) => Number.isInteger(value),
    message: `${props.value} is not valid`,
  },
})
