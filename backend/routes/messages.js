const router = require('express').Router();
let Message = require('../models/message.model');

router.route('/').get((req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const message = req.body.message;
  // const deathDay = Date.parse(req.body.deathDay);
  const newMessage = new Message({message: message});

  newMessage.save()
    .then(() => res.json('Pet added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;