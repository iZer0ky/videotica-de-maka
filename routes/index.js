const express = require('express');
const seriesServices = require('../services/seriesServices');
const categoriesServices = require('../services/categoriesServices');
const router = express.Router();

// (GET) Ruta a la Home Page
router.get('/', async function(req, res, next) {
  const [categories, series] = await Promise.all([categoriesServices.getAll(), seriesServices.getAll()]);
  
  res.render('index', { title: 'La Videoteca de Maka', series, categories});
});

module.exports = router;
