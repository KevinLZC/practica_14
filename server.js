const express = require('express'); //inyección de la dependencia
const app = express();
let port = process.env.PORT || 3000; //declaración del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estático
app.set('view engine', 'ejs'); //declaración de motor de renderizado

app.get('/', (req, res) => { //ruta raiz
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /><title>Práctica 14</title></head><body><h1>Hello World!</h1></body></html>`);
});
app.get('/person/:id', (req, res) => { //ruta para prueba de envío de datos por url
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
});
app.get('/persons/:id', (req, res) => { //ruta de ejercicio para repetición y selección de mensaje
    res.render('persons', {ID: req.params.id, message: req.query.message, times: req.query.times});
});

app.listen(port);