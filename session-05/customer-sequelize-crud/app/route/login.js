// var pool = require('../config/db-config');
var express = require('express');
var userController = require('../controller/user.controller');
var jwt = require('jsonwebtoken');
var router = express.Router();
const {jwtSecret} = require('../config/env');
// var constants = require('../service/constant');

router.post('/login', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    userController.checkLoginUser(email, password).then(function(result) {
        if (result.length > 0) {
            // console.log("result", result);
            // if (result[0].status == 'active' || result[0].status == 'Active') {
                var payload = {
                        user: result[0]
                    }
                    //generating token
                var token = jwt.sign(payload, jwtSecret, {
                    expiresIn: '24h' // expires in 24 hours
                });
                res.send({
                    result: 'success',
                    msg: 'Login successfully.',
                    token: token
                });
            // } else {
            //     // console.log("Inactive");
            //     res.send({ result: 'fail', msg: 'Your account is inactive, please check with admin.' });
            // }
        } else {
            res.send({ result: 'fail', msg: 'In correct Username or Password.' });
        }
    });
});

module.exports = router;