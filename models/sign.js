const { default: mongoose } = require('mongoose')

const signSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: [
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius',
      'capricorn',
      'aquarius',
      'pisces',
    ],
  },
})
