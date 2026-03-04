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

app.get('/name', (req,res) =>{
    res.send("Hello Joao")
})
app.post('/products', (req,res) =>{
    res.send("Products Page")
})
app.listen(port, () => {
    console.log(`Server running at ${port}`);
})