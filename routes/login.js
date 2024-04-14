var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', usersController.auth);

module.exports = router;