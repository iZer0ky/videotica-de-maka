const serieModel = require("../models/serieModel");
const seriesServices = require("../services/seriesServices");

//Retorna la lista de todas las series
const getAll = async (req, res, next) => {
    try{
        const series = await seriesServices.getAll();

        res.json(series);

    }catch(e){
        console.log(e);
    }
};

//Retorna únicamente la serie cuyo ID fue ingresado.
const getById = async (req, res, next) => {
    try{
        const serie = await seriesServices.getById(req.params.id);
    
        res.json(serie);
    }catch(e){
        console.log(e);
    }
};

//Crear Serie en la base de datos
const create = async (req, res, next) => {
    try{
        const document = await seriesServices.create({
            title: req.body.title,
            score: req.body.score,
            release: req.body.release,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            category: req.body.category
        })
        
        res.status(201).json(document);
    }catch(e){
        console.log(e);
        res.status(404);
    }
};

//Actualiza sobreescribiendo el registro de la serie cuyo ID fue ingresado.
const update = async (req, res, next) => {
    try{
        const update = await seriesServices.update({_id: (req.params.id)}, req.body);

        res.status(201).json(update);
    }catch(e){
        console.log(e);
    }
};

//Actualiza parcialmente (modificando solo lo ingresado) el registro de la serie cuyo ID fue ingresado.
const partialUpdate = async (req, res, next) => {
    
    try{
        const update = await seriesServices.partialUpdate({_id: (req.params.id)}, req.body);
        res.json(update);
    }catch(e){
        console.log(e);
    }
};

//Eliminamos de la base de datos la serie cuyo ID fue ingresado.
const remove = async (req, res, next) => {
    try{
        const deleteResponse = await seriesServices.remove({_id: (req.params.id) });
        
        res.json(deleteResponse);
    }catch(e){
        console.log(e);
    }
};

module.exports={
    getAll,
    getById,
    create,
    update,
    partialUpdate,
    remove
}