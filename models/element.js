const { default: mongoose } = require('mongoose')

const elementSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['fire', 'earth', 'air', 'water'],
    required: true,
    lowercase: true,
  },
})
