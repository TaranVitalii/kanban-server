require('dotenv').config()
const http = require('./app.js');



const port = process.env.PORT;

require('./db/mongoose.js');
http.listen(port, ()=> console.log('Сервер работает - localhost:8089'));
