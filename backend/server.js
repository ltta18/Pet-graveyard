const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', function() {
  console.log("connected")
});

const pet = require('./routes/pets');
const message = require('./routes/messages');

app.use('/pets', pet);
app.use('/messages', message);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})