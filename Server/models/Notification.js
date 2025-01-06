const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  notificationSound: { type: Boolean, default: false },
  emailNotification: { type: Boolean, default: false },
  browserNotification: { type: Boolean, default: true },
  weeklynews: { type: Boolean, default: false },

});

module.exports = mongoose.model('Notification', NotificationSchema);