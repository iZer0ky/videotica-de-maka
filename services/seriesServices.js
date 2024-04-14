const serieModel = require("../models/serieModel");

//Retorna la lista de todas las series
const getAll = async () => {
    try{
        const series = await serieModel.find().populate("category");

        return series;

    }catch(e){
        throw e;
    }
};

//Retorna únicamente la serie cuyo ID fue ingresado.
const getById = async (id) => {
    try{
        const serie = await serieModel.findById(id).populate("category");
    
        return serie;
    }catch(e){
        throw e;
    }
};

//Crear Serie en la base de datos
const create = async (serie) => {
    try{
        const document = new serieModel({
            title: serie.title,
            score: serie.score,
            release: serie.release,
            imageUrl: serie.imageUrl,
            description: serie.description,
            category: serie.category
        })
        
        return await document.save();
    }catch(e){
        throw e;
    }
};

//Actualiza sobreescribiendo el registro de la serie cuyo ID fue ingresado.
const update = async (id, serie) => {
    try{
        const update = await serieModel.replaceOne({_id: id}, serie);
        
        return update;
    }catch(e){
        throw e;
    }
};

//Actualiza parcialmente (modificando solo lo ingresado) el registro de la serie cuyo ID fue ingresado.
const partialUpdate = async (id, serie) => {
    try{
        const update = await serieModel.updateOne({_id: id}, serie);

        return update;
    }catch(e){
        throw e;
    }
};

//Eliminamos de la base de datos la serie cuyo ID fue ingresado.
const remove = async (id) => {
    
    try{
        const deleteResponse = await serieModel.deleteOne({_id: id });

        return deleteResponse;
    }catch(e){
        throw e;
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