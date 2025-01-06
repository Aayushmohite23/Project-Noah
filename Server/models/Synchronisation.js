const mongoose = require('mongoose');

const SynchronisationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  twitter: { type: Boolean, default: false },
  dropBox: { type: Boolean, default: false },
  googleDrive: { type: Boolean, default: false },
  instagram: { type: Boolean, default: false },

});

module.exports = mongoose.model('Synchronisation', SynchronisationSchema);