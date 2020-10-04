let mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;