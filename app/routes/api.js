'use strict';

// Dependencies
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var config = require('../config/config');

// Middleware
var auth = jwt({
  secret: config.jwt.secret,
  userProperty: 'payload'
});

// Controller
// // var profileCtrl = require('../controllers/category');
// // var authCtrl = require('../controllers/authentication');
// // var productCtrl = require('../controllers/profile');
// //
// // //Routes
// //
// // // profile
// // router.get('/profile', auth, profileCtrl.read);
// // router.delete('/profile/:userId', profileCtrl.delete)
// //
// // // product
// // router.post('/product', productCtrl.create);
// // router.get('/product/:productId', productCtrl.read);
// // router.put('/product/:productId', productCtrl.update);
// // router.delete('/product/:productId', productCtrl.delete);
// //
// //
// // var isAdmin = function (req, res, next) {
// //   console.log(req.user);
// //   if (req.user && req.user.admin) {
// //     next();
// //   } else {
// //     res.sendStatus(403);
// //   }
// // }
//
// var tester = function(req, res) { res.send('passed'); }
//
// // admin
// router.get('/requests', isAdmin, tester);
//
// // authentication
// router.post('/register', authCtrl.register);
// router.post('/login', authCtrl.login);



module.exports = router;
