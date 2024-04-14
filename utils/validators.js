const jsonwebtoken = require("jsonwebtoken");


const isPasswordSecure = (password) => {
    const regex = /(?=.*\d)(?=.*[A-Z]).{4,30}/
    return regex.test(password);
}

module.exports = {
    isPasswordSecure,
    //verifyToken
};