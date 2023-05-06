const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    console.log(req.body);
    res.status(200).send({ success: true })
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send({ success: true })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});