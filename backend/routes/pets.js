const router = require('express').Router();
let Pet = require('../models/pet.model');

router.route('/').get((req, res) => {
  Pet.find()
    .then(pets => res.json(pets))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;
  const email = req.body.email;
  // const deathDay = Date.parse(req.body.deathDay);
  const newPet = new Pet({name: name, age: age, gender: gender, email: email});

  newPet.save()
    .then(() => res.json('Pet added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;