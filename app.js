const {getCards, getCardForId, addCards, updateCard, removeCard } = require('./utill/cardsUtill.js');
const getColumns = require('./utill/columnsUtill.js').getColumns;
const postColumns = require('./utill/columnsUtill.js').postColumns;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");


app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());


//method for cards
app.get('/api/card', getCards );
app.get('/api/card/:id', getCardForId );
app.post('/api/card', addCards);
app.patch('/api/card/:id',updateCard);
app.delete('/api/card/:id', removeCard);

//method for column
app.get('/api/column', getColumns);
app.post('/api/column', postColumns)

module.exports = app;
