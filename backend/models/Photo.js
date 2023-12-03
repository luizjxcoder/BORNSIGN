const mongoose = require("mongoose");
// importa o módulo Mongoose para se conectar ao banco de dados
const { Schema } = mongoose;
// Define o schema para um usuário

const photoSchema = new Schema({
     image: String,
     title: String,
     likes: Array,
     comments: Array,
     userId: mongoose.ObjectId,
     userName: String,
}, {
     timestamps: true
});

const Photo = mongoose.model("Photo", Schema);

module.exports  = Photo;