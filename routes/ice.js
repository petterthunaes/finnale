
// routes/ice.js

var express = require('express');
var router 	= express.Router();

//

var Ice 	= require('../schema/ice.js');

module.exports = function () {

  router.get('/', isAuthenticated, function(req, res, next) {
    Ice.find().sort({_id:-1}).limit(1).exec(function(err,obj) {
        res.json({
          ip: obj[0].toObject().ip,
          usage: obj[0].toObject().usage,
          limit: obj[0].toObject().limit,
          created: obj[0].toObject().created_at,
        });
    });
  });

  return router;

};

function isAuthenticated(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
};
