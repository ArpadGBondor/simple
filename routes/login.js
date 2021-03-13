const express = require('express')
const fs = require('fs');
const router = express.Router();


router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', function (req, res) {
//   res.send('POST request to the homepage')
    var userArr   = [username];

        function username ( username ) {
            titleArr.push( username );
            console.log( "USername: " + userArr.join(", ") );
        }
})



module.exports = router;