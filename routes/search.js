const express = require('express');
const router = express.Router();

router.post('/', function(req,res,next){
    res.send(req.body.title);
    console.log(req.body.title);
});


module.exports = router;