const mongoose = require('mongoose');
const config = require('config');

const host = config.mongoose.uri;
const opt = config.mongoose.options;
mongoose.connect(host, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected to mongoDB!')
});

module.exports = mongoose;