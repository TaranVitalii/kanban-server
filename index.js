const app = require('./app.js');
const mongoose = require('mongoose');
require('dotenv').config()

// const config = require('config'); //мне понравилось через dotenv добавлять переменные окружение а с config что-то не сложилось
// const host = config.get('DataBase.host');

const host = process.env.DB_CONN;
const port = process.env.PORT;
console.log(port)
mongoose.connect(process.env.DB_CONN, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!')
});

app.listen(port, ()=> console.log('Сервер работает - localhost:8089'));
