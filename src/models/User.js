const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'usuario', // Por defecto, el rol es 'usuario'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
