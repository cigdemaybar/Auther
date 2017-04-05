'use strict';

var router = require('express').Router();
var User = require('./users/user.model');
router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.post('/login', function (req, res, next) {
  console.log("req.body", req.body)
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);
    } else {
      console.log("user", user)
      req.session.userId = user.id;
      res.send(user);
    }
  })
  .catch(next);
});

module.exports = router;
