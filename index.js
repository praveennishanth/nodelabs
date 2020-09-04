//index.js

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');


// Initial Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/jokes', require('./crud')(models.Jokes));

//New Code added for other R&D
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
  }) 
// Server
app.listen(port, () => console.log(`Listening on port ${port}`));