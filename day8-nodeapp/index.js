//es-5 syntax
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) =>{
    response.send('Hello world');
});

app.get('/page', (request, response) =>{
    response.send('Hello Priya on Page');
})

app.listen(port, function() {
    console.log('Server is running on port ' + port);
});