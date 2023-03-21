const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /><title>Práctica 14</title></head><body><h1>Hello World!</h1></body></html>`);
});
app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
});
app.get('/persons/:id', (req, res) => {
    res.render('persons', {ID: req.params.id, message: req.query.message, times: req.query.times});
});

app.listen(port);