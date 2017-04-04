'use strict';

var router = require('express').Router();
var User = require('./users/user.model');
router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.post('/login', function (req, res, next) {
  console.log("WE HIT THE RIGHT POST")
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      res.sendStatus(204);
    }
  })
  .catch(next);
});

module.exports = router;
