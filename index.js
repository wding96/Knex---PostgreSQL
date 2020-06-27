const express = require('express');
const apiRoute = require('./routes/movies')
const app = express();
const port = 3000;
app.listen(port, function(){
    console.log(`App listening on port ${port}`);
});

app.get('/', function(req, res) {
    res.send('index page - hello world')
});

app.use('/movies', apiRoute);