const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
// const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Fenty proxy listening at http://localhost:${port}`));