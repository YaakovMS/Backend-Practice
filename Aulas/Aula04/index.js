const express = require('express');

const app = express();

app.use(express.json())

app.use(function(req,res){
    console.log('Data', new Date());
    next();
})

app.get("/", function(req, res){
    console.log("URL=", req.url);
    console.log("Método=", req.method);
    console.log("Parâmetros de consulta=", req.query);
    console.log("Cabeçalhos=", req.headers);
    res.send("Olá");
});

app.post("/", function(req, res) {
    res.json({ status: "200", message: "Sucesso" });
});
app.delete('/',function(req,res){
    app.end()
})

app.listen(3000, function() {
    console.log("API está on!");
});
