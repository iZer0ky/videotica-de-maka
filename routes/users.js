var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', usersController.create);

module.exports = router;
