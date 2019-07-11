const app = require('./app.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kanban', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!')
});

app.listen(8089, ()=> console.log('Сервер работает - localhost:8089'));
