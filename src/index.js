const express = require('express');

const app = express();

//localhost:2020

app.get('/', (request, response) =>{
    /* return response.send('Hello World') */
    return response.json({message: 'Hello World'})
})

app.listen(2020)