const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'Front/build')));

app.get('/', function(request, reply) {
    reply.sendFile(path.join(__dirname, '/Front/build/index.html'));
  });
