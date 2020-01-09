//importing required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app = express();

// this is a "Bodyparser Middleware"
app.use(bodyParser.json());

// DB Config

const db = require('./config/keys').mongoURI;

// Connets to Mongo using mongoose

mongoose
    .connect(db,{useNewUrlParser: true})
    .then(() => console.log('Mongo is GOOOD'))
    .catch(err => console.log('This is the error' + err));


//Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server on ${port}`));