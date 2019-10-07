require('./config/config');

const express = require('express')

// recibir los headers y pasarlos a json
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {

    res.json('hello world');
});

app.post('/', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {

        // res.json(body);
        res.status(400).json({
            OK: false,
            mensaje: 'El nombre es necesario'
        });

    } else {

        res.json({

            persona: body
        });
    }

});

app.listen(process.env.PORT, () => {

    console.log(`escuchando puerto: ${process.env.PORT}`);
});