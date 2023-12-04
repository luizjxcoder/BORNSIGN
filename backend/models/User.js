const mongoose = require("mongoose");
// importa o módulo Mongoose para se conectar ao banco de dados
const { Schema } = mongoose;
// Define o schema para um usuário

const userSchema = new Schema({
     name: String,
     email: String,
     password: String,
     profileImage: String,
     bio: String
}, {
     timestamps: true
});

const User = mongoose.model("User", Schema);

module.exports = User;

