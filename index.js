//Server com Http
import http from "node:http"

const server = http.createServer( (req, res) => {
    if(req.url === "/"){
        res.end("Página Inicial")
    }else{
        res.statusCode = 404
        return res.end("Page not Found")
    }
})

server.listen(3000)

// Server com Express
/*import express from "express"
const port = 3333
const app = express()

app.get('/name', (req,res) =>{
    res.send("Hello Joao")
})
app.listen(port, () => {
    console.log(`Server running at ${port}`);
})*/