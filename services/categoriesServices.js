const categoryModel = require("../models/categoryModel");

const getAll = async () => {
    try{
        const categories = await categoryModel.find()

        //Retorna la lista de todas las series
        return categories;

    }catch(e){
        throw e;
    }
};

const create = async (category) => {
    try{
        const document = new categoryModel({
            name: category.name
        })
        
        //insertar en base de datos
        return await document.save();
    }catch(e){
        throw e;
    }
};

module.exports = {
    getAll,
    create
}