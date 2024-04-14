const userModel = require("../models/userModel");
const userServices = require("../services/usersServices");

const create = async (req, res, next) => {
    try{
        const user = await userServices.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })

        //insertar en base de datos
        if(user){
            res.redirect("/");
        } else {
            res.status = 409;
            res.send("El email ya se encuentra registrado en la plataforma.");
        }
    }catch(e){
        e.status = 500;
        next(e);
    }
};

const auth = async (req, res, next) => {
    try{
        const user = await userServices.auth({
            email: req.body.email,
            password: req.body.password
        },
        req.app.get("secretKey"));

        res.json(user);

    }catch{
        next(e);
    }
}

module.exports={
    create,
    auth
}