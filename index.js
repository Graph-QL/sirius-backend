const express = require('express');

const app = express();

app.listen(3333, function(){
	console.log('Listening to port 3333');
})

app.get('/', function(req, res) {
  res.send('Hello Universe')
})

app.get('/test', function(req, res) {
  res.send('Test successfull!')
})