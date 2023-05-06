import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
const app = express()
app.use(cors())
const port = 3000

app.use(json()) // for parsing application/json
app.use(urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/check', (req, res) => {
    console.log(req.body);
    res.status(200).send({ success: true })
});

app.post('/check', (req, res) => {
    console.log(req.body);
    res.status(200).send({ success: true })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});