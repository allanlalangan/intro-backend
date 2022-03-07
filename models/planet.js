const { default: mongoose } = require('mongoose')

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: [
      'sun',
      'moon',
      'mercury',
      'venus',
      'mars',
      'jupiter',
      'saturn',
      'uranus',
      'neptune',
      'pluto',
    ],
  },
})
