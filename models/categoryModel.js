const mongoose = require("../config/mongodb");

const categorySchema = new mongoose.Schema({
    name: String
});

categorySchema.statics.findByIdAndValidate = async (id) => {
    const document = await this.findById(id);
    if(!document){
        return{
            error: true,
            message: "No existe la categoría"
        };
    }

    return document;
}

const categoryModel = mongoose.model("categories", categorySchema);

module.exports = categoryModel;