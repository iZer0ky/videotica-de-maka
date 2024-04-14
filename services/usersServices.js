const jsonwebtoken = require("jsonwebtoken");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const create = async (user) => {
    try{
        const document = new userModel({
            email: user.email,
            username: user.username,
            password: user.password
        })
        
        //insertar en base de datos
        const userFind = await userModel.findOne({email:user.email});
        console.log(userFind);
        if (userFind){
            console.log(user.email);
            return null;
        } else{
            return await document.save();
        }
    }catch(e){
        throw e;
    }
};

const auth = async (userData,secretKey) =>  {
    try{
        const user = await userModel.findOne({email:userData.email});
        if(!user){
            return "El email y/o contraseña no son correctos. (2)";
        }

        if(bcrypt.compareSync(userData.password, user.password)){
            const token = jsonwebtoken.sign(
                {userId:user._id},
                secretKey,
                {expiresIn:"12h"}
            );
            return token;
        }

        //Retorna la lista de todas las series
        return "El email y/o contraseña no son correctos. (1)";

    }catch(e){
        throw e;
    }
}

module.exports={
    create,
    auth
}