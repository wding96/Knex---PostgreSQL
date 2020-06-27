const express = require('express');
const router = express.Router();

module.exports = router; 

const db = require('../../database');

router.get('/', function(req, res){
    // build a query
    db.select().from('movies').then(function(data){
        res.send(data);
    }); 
});

module.exports = router;