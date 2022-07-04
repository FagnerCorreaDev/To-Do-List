const express = require("express")
const app = express()
const port = 3000

const body = require("body-parser")
app.use(body.urlencoded({extended: true}))
app.use(express.static("public"))

app.set("view engine", "ejs")

let itens = []

app.get("/", function(req, res){
    let data = new Date()
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
    let hoje = data.toLocaleDateString('pt-BR', options)

    res.render('todoList', {data: hoje, novoItem: itens})
})

app.post("/", function(req, res){

    let item = req.body.novoItem
    itens.push(item)
    res.redirect("/")
})

app.listen(port, function(){
    console.log("Servidor na porta "+ port)
})