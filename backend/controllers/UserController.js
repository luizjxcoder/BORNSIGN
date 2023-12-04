const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jwtwebtoken");
const jwtwebtoken = process.env.JWT_SECRET;

// gerar token do usuário

const generateToken = (id) => {
     return jwt.sign({ id }, jwtSecret, {
          expiresIn: "7d",
     });
};

// Registre o usuário e faça login
const register = async (req, res) => {
     res.send("Registro");
};

module.exports = {
     register,
};
