//Server com Http
//import http from "node:http"
import dotenv from "dotenv"

dotenv.config()
/*const server = http.createServer( (req, res) => {
    if(req.url === "/"){
        res.end("Página Inicial")
    }else{
        res.statusCode = 404
        return res.end("Page not Found")
    }
})

server.listen(process.env.port)*/

// Server com Express
import express from "express"
const port = 3333
const app = express()
app.use(express.json())

//Route Params
app.get('/user/:name', (req,res) =>{
    const {name} = req.params
    res.send(`Hello ${name}`)
})
//Query Params
app.get('/products', (req,res) =>{
    const {name, type, color} = req.query
    res.send(`${name} ${type} ${color}`)
})
//Body Params -> Somente usados em POST e PUT
app.post('/users', (req, res) =>{
    const {name, age, gender} = req.body
    console.log("Created user")
})
app.listen(port, () => {
    console.log(`Server running at ${port}`);
})