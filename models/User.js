const mongoose = require("mongoose")

const Usuarios = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Usuarios', Usuarios)//o último parâmetro é a collection