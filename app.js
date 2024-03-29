const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const passport = require("passport");
const path = require('path');
const {getCards, getCardForId, addCards, updateCard, removeCard } = require('./routes/cards.js');
const {getColumns , postColumns,removeColumn } = require('./routes/columns.js');
const signIn = require('./routes/auth.js');
const register = require('./routes/registr.js');
const myPasport = require('./passport/myPassport.js');
const router = require('./apiRouter.js');
const updateCardWS = require('./routes/repository/updateWS.js')

// Use body-parser to get POST requests for API use
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
// app.use("/api/signin",express.static(path.join(__dirname +"/public/auth.html")));

app.use(passport.initialize());
// Log requests to console
app.use(morgan('dev'));

//method for auth
app.post('/api/signin',signIn);
app.post('/api/register',register);

//method check your auth
app.use('/', router);
// io.on('connection', function(socket){
// 	console.log('made socket connection');
// 	socket.on("move",async function(data){
// 		const { cardIdTarget, editorColumnId } = data;
// 		let update = await updateCardWS(cardIdTarget, editorColumnId);
// 	});
// 	socket.broadcast.emit('eventClient', "this is a test");

// });
//method for cards
app.get('/api/card', getCards );
app.get('/api/card/:id', getCardForId );
app.post('/api/card', addCards);
app.patch('/api/card/:id',updateCard);
app.delete('/api/card/:id', removeCard);
app.delete('/api/column/:id', removeColumn)

//method for column
app.get('/api/column', getColumns);
app.post('/api/column', postColumns)


module.exports = http;


