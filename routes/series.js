const express = require('express');
const router = express.Router();

const seriesController = require('../controllers/seriesController');

/* GET users listing. */
//Mostrar Listado de Series
router.get('/', seriesController.getAll);

//Buscar serie por ID
router.get('/:id', seriesController.getById);

//Agregar una serie
router.post('/', (req, res, next) => req.app.verifyToken(req, res, next), seriesController.create);

//Actualizar una serie (Totalmente)
router.put('/:id', (req, res, next) => req.app.verifyToken(req, res, next), seriesController.update);

//Actualizar una serie (Parcialmente)
router.patch('/:id', (req, res, next) => req.app.verifyToken(req, res, next), seriesController.partialUpdate);

//Eliminar una serie
router.delete('/:id', (req, res, next) => req.app.verifyToken(req, res, next), seriesController.remove);

module.exports = router;
