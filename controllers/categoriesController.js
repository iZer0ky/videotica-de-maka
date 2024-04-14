const categoryModel = require("../models/categoryModel");
const categoriesServices = require("../services/categoriesServices");

//Retorna una lista de todas las categorías
const getAll = async (req, res, next) => {
    try{
        const categories = await categoriesServices.getAll();

        
        res.json(categories);

    }catch(e){
        next(e);
    }
};

//Crear Categoría en la base de datos
const create = async (req, res, next) => {
    try{
        const document = await categoriesServices.create({
            name: req.body.name
        })

        res.status(201).json(document);
    }catch(e){
        next(e);
        res.status(400);
    }
};

module.exports = {
    getAll,
    create
}