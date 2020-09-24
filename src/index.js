const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/', require('./routes'));

const port = process.env.PORT || '3000';

app.listen(port, () => {
    console.log('servidor rodando');
});
