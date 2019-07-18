require('dotenv').config()
const app = require('./app.js');



const port = process.env.PORT;

require('./db/mongoose.js');
app.listen(port, ()=> console.log('Сервер работает - localhost:8089'));
