const express = require('express');
const router = express.Router();

const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.getAll);

router.post("/", (req, res, next) => req.app.verifyToken(req, res, next) ,categoriesController.create);

module.exports = router;