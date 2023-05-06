const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
app.use(cors())
const port = 3000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/check', (req, res) => {
    logContent(req);

    // necessário converter de dotCase to snakeCase
    const jsonQuery = Object.entries(req.query).reduce((x,[k,v]) => (x[toSnake(k)]=v) && x, {})

    res.status(200).send(jsonQuery.hub_challenge)
});

app.post('/check', (req, res) => {
    logContent(req);

    // necessário converter de dotCase to snakeCase
    const jsonQuery = Object.entries(req.query).reduce((x,[k,v]) => (x[toSnake(k)]=v) && x, {})

    res.status(200).send(jsonQuery.hub_challenge)
});

function logContent(req) {
    console.log("Query:");
    console.log(req.query);

    console.log("Body:");
    console.log(req.body);
}

const toSnake = s => s.replace(".", "_")

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});