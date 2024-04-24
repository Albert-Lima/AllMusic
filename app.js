const express = require('express')
const app = express()

//config
    //body-parser
        const bodyParser = require("body-parser")
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    //handlebars
        const handlebars = require("express-handlebars")
        app.engine("handlebars", handlebars.engine({defaultLayout: 'main'}))
        app.set("view engine", "handlebars")
    //mongoose
        const mongoose = require("mongoose")
        mongoose.connect("mongodb+srv://albertsousalima:albertlima123@users.lksdnbu.mongodb.net/").then(()=>{
            console.log("conectado ao mongoDB Atlas")
        }).catch((err)=>{
            console.log("erro ao se conectar com o mongoDB:"+err)
        })
    //arquivos estáticos
        app.use(express.static("public"))

//models
const Usuarios = require("./models/User")
//Rotas
    //main
        app.get("/", (req, res)=>{
            res.render("index")
        })
    //cadastro
        app.get("/cadastro", (req, res)=>{
            res.render("layouts/usuarios/cadastro")
        })
        app.post("/cadastro", (req, res)=>{
            const novoUsuario = new Usuarios({
                nome: req.body.name,
                email: req.body.email,
                senha: req.body.password
            })
            novoUsuario.save().then(()=>{
                console.log("usuario cadastrado")
                res.redirect("/")
            }).catch((err)=>{
                console.log("erro ao cadastrar usuario: "+err)
                res.redirect("/cadastro")
            })
        })
app.listen(8081, ()=>{
    console.log("servidor rodadando na porta 8081")
})