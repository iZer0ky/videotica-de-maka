const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { isPasswordSecure } = require("../utils/validators");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Este campo es obligatorio"]
    },
    username: {
        type: String,
        required: [true, "Este campo es obligatorio"]
    },
    password: {
        type: String,
        required: [true, "Este campo es obligatorio"],
        validate:{
            validator: isPasswordSecure,
            message: "La {PATH} debe contener al menos 1 número, 1 letra mayúscula, y poseer una longitud de entre 4 y 30 caracteres.",
        }
    },
});

// FUNCTION NORMAL
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

/* ARROW FUNCTION
userSchema.pre("save", (next) => {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
*/


const userModel = mongoose.model("users", userSchema);

module.exports = userModel;