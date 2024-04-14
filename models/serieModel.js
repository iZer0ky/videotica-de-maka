const mongoose = require("../config/mongodb");

const serieSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, ]  
    },
    score:Number,
    release:Date,
    imageUrl:String,
    description:String,
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    }
});

const serieModel = mongoose.model("series", serieSchema);

module.exports = serieModel;